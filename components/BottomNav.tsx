
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import styles from "./styles/onboarding";

const BottomNav = () => {
  return (
    <View style={styles.bottomNav}>
      <View style={styles.navItem}>
        <Ionicons name="location" size={20} color={COLORS.primary} />
        <Text style={[styles.navText, { color: COLORS.primary }]}>Track</Text>
      </View>

      <View style={styles.navItem}>
        <Ionicons name="document-text-outline" size={20} color="#777" />
        <Text style={styles.navText}>Updates</Text>
      </View>

      <View style={styles.navItem}>
        <Ionicons name="settings-outline" size={20} color="#777" />
        <Text style={styles.navText}>Care</Text>
      </View>

      <View style={styles.navItem}>
        <Ionicons name="person-outline" size={20} color="#777" />
        <Text style={styles.navText}>Profile</Text>
      </View>
    </View>
  );
};

export default BottomNav;