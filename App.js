import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, Text, Button } from "react-native";

const Stack = createNativeStackNavigator();

// 🔹 Home Screen
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Button title="Customers" onPress={() => navigation.navigate("Customers")} />
      <Button title="Collection" onPress={() => navigation.navigate("Collection")} />
      <Button title="Export" onPress={() => navigation.navigate("Export")} />
    </View>
  );
}

// 🔹 Customers Screen
function CustomersScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Customer List (येथे डेटा नंतर दाखवू)</Text>
    </View>
  );
}

// 🔹 Collection Screen
function CollectionScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Collection Screen</Text>
    </View>
  );
}

// 🔹 Export Screen
function ExportScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Export Screen</Text>
    </View>
  );
}

// 🔥 Main App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Customers" component={CustomersScreen} />
        <Stack.Screen name="Collection" component={CollectionScreen} />
        <Stack.Screen name="Export" component={ExportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
