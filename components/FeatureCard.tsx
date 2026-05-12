
import { View, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./styles/onboarding";

const FeatureCard = ({
  icon,
  color,
  title,
  desc,
}: {
  icon: any;
  color: string;
  title: string;
  desc: string;
}) => {
  return (
    <View style={styles.featureCard}>
      <View style={[styles.featureIcon, { backgroundColor: `${color}20` }]}>
        <Ionicons name={icon} size={24} color={color} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDesc}>{desc}</Text>
      </View>

      <Feather name="chevron-right" size={22} color="#888" />
    </View>
  );
};

export default FeatureCard;