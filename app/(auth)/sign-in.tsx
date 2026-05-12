import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";

import AuthHeader from "../../components/AuthHeader";
import InputField from "../../components/InputField";
import SocialButton from "../../components/SocialButton";

import { COLORS } from "../../constants/index";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader />

      <Text style={styles.title}>
        Welcome back to{"\n"}
        <Text style={{ color: COLORS.primary }}>PawTrack</Text>
      </Text>

      <Text style={styles.subtitle}>
        Track your furry friend anytime, anywhere.
      </Text>


      <View style={{ marginTop: 24 }}>
        <InputField placeholder="Email Address" />
        <InputField placeholder="Password" />
      </View>

      <TouchableOpacity activeOpacity={0.8}>
        <LinearGradient
          colors={["#9F8CFF", "#6C63FF"]}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.forgot}>Forgot Password?</Text>

      <View style={styles.dividerRow}>
        <View style={styles.divider} />
        <Text style={styles.or}>OR</Text>
        <View style={styles.divider} />
      </View>

      <SocialButton />

      <Text style={styles.footer}>
        Don’t have an account?{" "}
        <Text style={{ color: COLORS.primary }}>Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 38,
    fontWeight: "800",
    color: COLORS.text,
    marginTop: 28,
    lineHeight: 46,
  },

  subtitle: {
    marginTop: 14,
    color: COLORS.gray,
    fontSize: 16,
    lineHeight: 24,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 34,
    marginTop: 28,
  },

  button: {
    height: 68,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  forgot: {
    textAlign: "right",
    marginTop: 18,
    color: COLORS.primary,
    fontWeight: "600",
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 28,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#DDD",
  },

  or: {
    marginHorizontal: 12,
    color: COLORS.gray,
  },

  footer: {
    textAlign: "center",
    marginTop: 24,
    color: COLORS.gray,
    fontSize: 15,
  },
});
