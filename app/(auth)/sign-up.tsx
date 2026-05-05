import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Gradient Background */}
      <View style={styles.backgroundTop} />
      <View style={styles.backgroundBottom} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with Logo */}
        <View style={styles.headerContainer}>
          <Ionicons name="paw" size={24} color="white" />
          <Text style={styles.headerText}>cute pet</Text>
        </View>

        {/* Dog Mascot Area */}
        <View style={styles.mascotContainer}>
          <View style={styles.mascotPlaceholder}>
            <Text style={styles.mascotText}>🐕</Text>
          </View>
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Title */}
          <Text style={styles.formTitle}>Login</Text>

          {/* Username Input */}
          <View style={styles.inputWrapper}>
            <Ionicons
              name="person-outline"
              size={20}
              color="#2D7FB8"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="user name"
              placeholderTextColor="#B0BEC5"
              editable={false}
            />
          </View>

          {/* Phone Input */}
          <View style={styles.inputWrapper}>
            <Ionicons
              name="call-outline"
              size={20}
              color="#2D7FB8"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="phone number"
              placeholderTextColor="#B0BEC5"
              editable={false}
            />
          </View>

          {/* Remember Me & Forgot Password */}
          <View style={styles.optionsRow}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
              <Text style={styles.checkboxLabel}>remember me</Text>
            </View>
            <TouchableOpacity disabled>
              <Text style={styles.forgotPassword}>forgot password</Text>
            </TouchableOpacity>
          </View>

          {/* Buttons Container */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signUpButton} disabled>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} disabled>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E7BA8',
  },
  backgroundTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: '#2D8FBC',
  },
  backgroundBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: '#1E7BA8',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    zIndex: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginLeft: 12,
    letterSpacing: 0.5,
  },
  mascotContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    marginVertical: 20,
    zIndex: 5,
  },
  mascotPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
  },
  mascotText: {
    fontSize: 100,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: '#F5F5F5',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 28,
    zIndex: 20,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2D7FB8',
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: '#E0E8F0',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#424242',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1.5,
    borderColor: '#B0BEC5',
    borderRadius: 3,
    marginRight: 8,
    backgroundColor: 'white',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#B0BEC5',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#2D8FBC',
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  signUpButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2D8FBC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D8FBC',
  },
  loginButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#2D8FBC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default LoginScreen;
