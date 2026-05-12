import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Logo from "@/components/Logo";
import NotificationCard from "@/components/NotificationCard";

const NotificationScreen = () => {
  return (
    <SafeAreaView className="container">
      {/* HEADER */}
      <View className="header">
        <Logo />
        <Text className="page-count">3 / 3</Text>
      </View>

      {/* TITLE */}
      <Text className="title">
        Instant <Text className="text-primary">updates</Text>,{"\n"}
        total peace of mind
      </Text>

      {/* SUBTITLE */}
      <Text className="subtitle">
        Get real-time notifications about your pet’s journey.
      </Text>

      {/* PHONE MOCKUP */}
      <LinearGradient
        colors={["#9F8CFF", "#6C63FF"]}
        className="phone-mockup"
        style={{
          width: "72%",
          height: "36%",
        }}
      >
        <Ionicons name="lock-closed" size={18} color="#fff" />

        <Text className="time">9:41</Text>

        <Text className="date">Monday, June 3</Text>
      </LinearGradient>

      {/* NOTIFICATIONS */}
      <View className="-mt-[60px]">
        <NotificationCard
          icon="paw"
          color="#6C63FF"
          title="Picked up!"
          desc="Buddy has been picked up and is on the way."
          time="9:41 AM"
        />

        <NotificationCard
          icon="medical"
          color="#39D98A"
          title="On the way!"
          desc="Buddy is 2.4 km away."
          time="10:02 AM"
        />

        <NotificationCard
          icon="heart"
          color="#FF6FAE"
          title="Almost there!"
          desc="Buddy will arrive soon."
          time="10:20 AM"
        />
      </View>

      {/* CTA BUTTON */}
      <TouchableOpacity activeOpacity={0.8}>
        <LinearGradient
          colors={["#9F8CFF", "#6C63FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="cta-btn"
        >
          <FontAwesome5 name="paw" size={18} color="#fff" />

          <Text className="cta-text">Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* FOOTER */}
      <Text className="security-text">
        Your pet’s safety is our top priority.
      </Text>
    </SafeAreaView>
  );
};

export default NotificationScreen;
