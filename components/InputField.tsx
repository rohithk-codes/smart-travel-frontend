import React from "react";
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS } from "../constants/index";

export default function InputField({ placeholder }: { placeholder: string }) {
  return (
    <KeyboardAvoidingView style={styles.inputContainer}>
        <TouchableWithoutFeedback>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        style={styles.input}
      />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 18,
    paddingHorizontal: 20,
    height: 68,
    justifyContent: "center",
  },

  input: {
    fontSize: 16,
    color: COLORS.text,
  },
});
