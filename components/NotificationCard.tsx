
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles/onboarding";

const NotificationCard = ({
  icon,
  color,
  title,
  desc,
  time,
}: any) => {
  return (
    <View style={styles.notificationCard}>
      <LinearGradient
        colors={[`${color}`, `${color}CC`]}
        style={styles.notificationIcon}
      >
        <Ionicons name={icon} size={20} color="#fff" />
      </LinearGradient>

      <View style={{ flex: 1 }}>
        <Text style={styles.notificationTitle}>{title}</Text>
        <Text style={styles.notificationDesc}>{desc}</Text>
      </View>

      <Text style={styles.notificationTime}>{time}</Text>
    </View>
  );
};

export default NotificationCard;