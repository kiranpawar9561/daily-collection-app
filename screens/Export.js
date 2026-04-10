import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import * as FileSystem from "expo-file-system";

export default function Export() {
  const [log, setLog] = useState("");

  // 🔹 Dummy data (नंतर real data connect करू)
  const data = [
    { id: "490001", name: "Kiran Pawar", amount: 200, balance: 4800 },
    { id: "490002", name: "Rahul Patil", amount: 500, balance: 2500 },
  ];

  // 🔹 OUT.dat generate करणे
  const generateFile = async () => {
    try {
      let total = 0;
      let lines = [];

      data.forEach((item) => {
        total += item.amount;

        lines.push(
          `${item.id},${item.amount},${item.name},${item.balance},10.04.26`
        );
      });

      const header = `000000,${data.length},${total}\n`;
      const content = header + lines.join("\n");

      const path = FileSystem.documentDirectory + "OUT.dat";

      await FileSystem.writeAsStringAsync(path, content);

      setLog(path);

      Alert.alert("Success", "OUT.dat Exported ✔️");
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Export failed");
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        📦 Export OUT.dat File
      </Text>

      <Button title="📤 Generate OUT.dat" onPress={generateFile} />

      {log !== "" && (
        <Text style={{ marginTop: 20 }}>
          Saved At: {"\n"}
          {log}
        </Text>
      )}
    </View>
  );
}
