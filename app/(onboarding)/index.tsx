import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import NotificationScreen from "./NotificationScreen";
import SafetyScreen from "./SafetyScreen";
import TrackingScreen from "./TrackingScreen";

export default function Index() {
  const totalScreens = 3;
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastScreen = activeIndex === totalScreens - 1;
  return (
    <SafeAreaView className="flex-1  items-center justify-between ">
      <Swiper
        ref={swiperRef}
        loop={false}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        <TrackingScreen />
        <SafetyScreen />
        <NotificationScreen />
      </Swiper>
      <CustomButton
        title={isLastScreen ? "Get Started" : "Next"}
        onPress={() =>
          isLastScreen
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-1/2 bg-[#9A7DFB]"
      />
    </SafeAreaView>
  );
}
