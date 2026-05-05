import { Link } from "expo-router";
import  "../global.css";
import { Text, View,Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
   <SafeAreaView className="felx-1 items-center justify-center bg-white">
    <Text className="text-2xl font-bold text-gray-800 mb-4">Welcome to Petzy!</Text>
    <StatusBar style="auto" />
   </SafeAreaView>
  );
}


