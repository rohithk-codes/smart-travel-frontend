import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import AuthHeader from "../../components/AuthHeader";

export default function VerifyOtpScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F7F8FC] px-6">
      <AuthHeader />

      <View className="flex-1 justify-center">
        {/* ICON */}
        <View className="w-[120px] h-[120px] rounded-full bg-[#ECE8FF] items-center justify-center self-center mb-[34px]">
          <Text className="text-[48px]">
            📱
          </Text>
        </View>

        {/* TITLE */}
        <Text className="text-center text-[38px] leading-[46px] font-extrabold text-black">
          Verify your{"\n"}

          <Text className="text-[#6C63FF]">
            OTP Code
          </Text>
        </Text>

        {/* SUBTITLE */}
        <Text className="mt-[18px] text-center text-[16px] leading-6 text-[#7B7B8B]">
          Enter the 4-digit code sent to your mobile number.
        </Text>

        {/* OTP BOXES */}
        <View className="flex-row justify-between mt-[44px]">
          <View className="w-[74px] h-[74px] rounded-[24px] border border-[#ECECF4] bg-white items-center justify-center">
            <Text className="text-[28px] font-bold text-black">
              2
            </Text>
          </View>

          <View className="w-[74px] h-[74px] rounded-[24px] border border-[#ECECF4] bg-white items-center justify-center">
            <Text className="text-[28px] font-bold text-black">
              5
            </Text>
          </View>

          <View className="w-[74px] h-[74px] rounded-[24px] border border-[#ECECF4] bg-white items-center justify-center">
            <Text className="text-[28px] font-bold text-black">
              8
            </Text>
          </View>

          <View className="w-[74px] h-[74px] rounded-[24px] border border-[#ECECF4] bg-white items-center justify-center">
            <Text className="text-[28px] font-bold text-black">
              1
            </Text>
          </View>
        </View>

        {/* BUTTON */}
        <TouchableOpacity activeOpacity={0.8} className="mt-[42px]">
          <LinearGradient
            colors={["#9F8CFF", "#6C63FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="h-[68px] rounded-corner items-center justify-center"
          >
            <Text className="text-white text-[18px] font-bold">
              Verify OTP
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* RESEND */}
        <Text className="text-center text-[15px] text-[#7B7B8B] mt-7">
          Didn’t receive code?{" "}

          <Text className="text-[#6C63FF] font-semibold">
            Resend
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}