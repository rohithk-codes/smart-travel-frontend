import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import BottomNav from "@/components/BottomNav";
import FeatureCard from "@/components/FeatureCard";
import Logo from "@/components/Logo";

const SafetyScreen = () => {
  return (
    <SafeAreaView className="container">
      {/* HEADER */}
      <View className="header">
        <Logo />

        <Text className="page-count">2 / 3</Text>
      </View>

      {/* TITLE */}
      <Text className="title">
        <Text className="text-success">Safe</Text> delivery.
        {"\n"}
        Happy pet.
      </Text>

      {/* SUBTITLE */}
      <Text className="subtitle">
        We prioritize your pet’s safety, comfort, and well-being.
      </Text>

      {/* PET SECTION */}
      <View className="pet-section">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop",
          }}
          className="big-dog"
        />

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=800&auto=format&fit=crop",
          }}
          className="big-cat"
        />

        <LinearGradient colors={["#B197FF", "#7C5CFF"]} className="shield">
          <Ionicons name="shield-checkmark" size={32} color="#fff" />
        </LinearGradient>
      </View>

      {/* FEATURES */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        <FeatureCard
          icon="shield-checkmark"
          color="#8B5CF6"
          title="Secure & Verified"
          desc="All transporters are background checked and verified."
        />

        <FeatureCard
          icon="thermometer"
          color="#39D98A"
          title="Comfort Assured"
          desc="Climate-controlled travel for stress-free journeys."
        />

        <FeatureCard
          icon="paw"
          color="#FF6B81"
          title="Pet Care First"
          desc="We follow expert pet care guidelines."
        />

        <FeatureCard
          icon="camera"
          color="#60A5FA"
          title="Live Monitoring"
          desc="Track every journey in real-time."
        />
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
};

export default SafetyScreen;
