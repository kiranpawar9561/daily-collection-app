import React, { useState } from "react";
import { View, Text, Button, FlatList, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  // 🔹 IN.dat file pick करणे
  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });

      if (result.canceled) return;

      const file = await fetch(result.assets[0].uri);
      const text = await file.text();

      const parsed = parseData(text);
      setCustomers(parsed);

      Alert.alert("Success", "IN.dat loaded successfully");
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "File load failed");
    }
  };

  // 🔹 .dat parse logic
  const parseData = (text) => {
    return text
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => {
        const p = line.split(",");

        return {
          id: p[0],
          name: p[2],
          balance: p[3],
          mobile: p[6],
        };
      });
  };

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <Button title="📂 Import IN.dat" onPress={pickFile} />

      <FlatList
        data={customers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderColor: "#ccc",
            }}
          >
            <Text>👤 {item.name}</Text>
            <Text>💰 Balance: ₹{item.balance}</Text>
            <Text>📱 {item.mobile}</Text>
          </View>
        )}
      />
    </View>
  );
}
