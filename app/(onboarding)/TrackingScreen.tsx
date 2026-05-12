import { Image, Text, View } from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import { SafeAreaView } from "react-native-safe-area-context";

import BottomNav from "@/components/BottomNav";
import Logo from "@/components/Logo";

const TrackingScreen = () => {
  return (
    <SafeAreaView className="container">
      {/* HEADER */}
      <View className="header">
        <Logo />

        <Text className="page-count">1 / 3</Text>
      </View>

      {/* TITLE */}
      <View className="title-wrapper">
        <Text className="title">
          Real-time <Text className="text-primary">tracking</Text>
          {"\n"}
          of your furry friend
        </Text>

        <Text className="subtitle">
          Live GPS updates to keep you informed every step of the way.
        </Text>
      </View>

      {/* MAP */}
      <View className="map-container">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop",
          }}
          className="map-image"
        />

        {/* LIVE BADGE */}
        <View className="live-badge">
          <View className="live-dot" />

          <Text className="live-text">Live</Text>
        </View>

        {/* DISTANCE CARD */}
        <View className="distance-card">
          <Text className="distance">2.4 km</Text>

          <Text className="distance-small">remaining</Text>
        </View>

        {/* ETA CARD */}
        <View className="eta-card">
          <View>
            <Text className="eta-small">Estimated arrival</Text>

            <Text className="eta-time">20 min</Text>
          </View>

          <View className="home-icon">
            <Ionicons name="home" size={18} color="#9A7DFB" />
          </View>
        </View>

        {/* PET MARKER */}
        <View className="pet-marker">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop",
            }}
            className="pet-image"
          />
        </View>
      </View>

      {/* BOTTOM CARD */}
      <View className="bottom-card">
        <View className="bottom-top">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop",
            }}
            className="avatar"
          />

          <View className="flex-1">
            <View className="name-row">
              <Text className="pet-name">Buddy</Text>

              <Ionicons name="checkmark-circle" size={18} color="#9A7DFB" />
            </View>

            <Text className="green-text">On the way to you</Text>

            <View className="progress-bg">
              <View className="progress-fill" />
            </View>
          </View>

          <LinearGradient
            colors={["#A78BFA", "#7C5CFF"]}
            className="delivery-btn"
          >
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={22}
              color="#fff"
            />
          </LinearGradient>
        </View>

        <Text className="footer-text">2.4 km away • ETA 20 min</Text>

        <BottomNav />
      </View>
    </SafeAreaView>
  );
};

export default TrackingScreen;
