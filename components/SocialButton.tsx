import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function SocialButton() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="h-16 rounded-[24px] border border-[#ECECF4] bg-white flex-row items-center justify-center"
    >
      <AntDesign
        name="google"
        size={20}
        color="#EA4335"
      />

      <Text className="text-[16px] font-semibold text-black ml-3">
        Continue with Google
      </Text>
    </TouchableOpacity>
  );
}