import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../constants/index";

export default function AuthHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <FontAwesome5 name="paw" size={22} color={COLORS.primary} />
        <Text style={styles.logo}>PawTrack</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  logo: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.primary,
  },
});