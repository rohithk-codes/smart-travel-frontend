import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../../components/AuthHeader";
import InputField from "../../components/InputField";
import SocialButton from "../../components/SocialButton";
import { useState } from "react";
import { COLORS } from "../../constants/index";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

export default function SignupScreen() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const[AccountCreating, setAccountCreating] = useState(false);

  return (
    <ScrollView className="flex-1 bg-[#F7F8FC] px-6">
      {/* LOGO */}
      <AuthHeader />

      {/* TITLE */}
      <View className="mt-8">
        <Text className="text-[38px] leading-[46px] font-extrabold text-black">
          Create your{"\n"}
          <Text className="text-[#6C63FF]">PawTrack</Text> account
        </Text>

        <Text className="text-[16px] text-[#7B7B8B] leading-6 mt-4">
          Safe and reliable pet delivery starts here.
        </Text>
      </View>

      {/* INPUTS */}
      <View className="mt-8">
        <InputField
          placeholder="Full Name"
          value={form.fullName}
          onChangeText={(value) => setForm({ ...form, fullName: value })}
        />
        <InputField placeholder="Email Address" />
        <InputField placeholder="Password" />
      </View>

      {/* BUTTON */}
      <CustomButton title={AccountCreating ? "Creating Account..." : "Create Account"}
      onPress={()=>!AccountCreating?router.replace('/(auth)/verify-otp'):setAccountCreating(true)}
      />

      {/* DIVIDER */}
      <View className="flex-row items-center my-7">
        <View className="flex-1 h-[1px] bg-[#DDD]" />

        <Text className="mx-3 text-[#7B7B8B]">OR</Text>

        <View className="flex-1 h-[1px] bg-[#DDD]" />
      </View>

      {/* GOOGLE BUTTON */}
      <SocialButton />

      {/* FOOTER */}
      <Text className="text-center text-[#7B7B8B] text-[15px] mt-8">
        Already have an account?{" "}
        <Text className="text-[#6C63FF] font-semibold">Login</Text>
      </Text>
    </ScrollView>
  );
}
