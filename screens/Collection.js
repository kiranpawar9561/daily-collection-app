import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, FlatList } from "react-native";

export default function Collection() {
  const [customers, setCustomers] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [amount, setAmount] = useState("");

  // 🔹 Dummy load (नंतर IN.dat share system जोडू)
  const loadDummy = () => {
    setCustomers([
      { id: "490001", name: "Kiran Pawar", balance: 5000 },
      { id: "490002", name: "Rahul Patil", balance: 3000 },
    ]);
  };

  // 🔹 Collection add logic
  const addCollection = () => {
    if (!selectedId || !amount) {
      Alert.alert("Error", "ID आणि Amount टाका");
      return;
    }

    const amt = parseFloat(amount);

    const updated = customers.map((c) => {
      if (c.id === selectedId) {
        return {
          ...c,
          balance: parseFloat(c.balance) - amt,
        };
      }
      return c;
    });

    setCustomers(updated);
    setAmount("");
    setSelectedId("");

    Alert.alert("Success", "Collection Added ✔️");
  };

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <Button title="Load Customers (Test)" onPress={loadDummy} />

      <Text style={{ marginTop: 10 }}>Customer ID:</Text>
      <TextInput
        value={selectedId}
        onChangeText={setSelectedId}
        placeholder="Enter Customer ID"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Text>Amount:</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter Amount"
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Button title="💰 Add Collection" onPress={addCollection} />

      <Text style={{ marginTop: 20, fontWeight: "bold" }}>
        Customer List:
      </Text>

      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderColor: "#ccc",
            }}
          >
            <Text>👤 {item.name}</Text>
            <Text>🆔 {item.id}</Text>
            <Text>💰 Balance: ₹{item.balance}</Text>
          </View>
        )}
      />
    </View>
  );
}
