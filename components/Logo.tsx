import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../constants";
import styles from "./styles/onboarding";

const Logo = () => {
  return (
    <View style={styles.logoRow}>
      <FontAwesome5 name="paw" size={20} color={COLORS.primary} />
      <Text style={styles.logoText}>Smart Track</Text>
    </View>
  );
};

export default Logo;