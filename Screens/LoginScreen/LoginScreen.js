import { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import {
  container,
  backgroundImage,
  authorizeContainer,
  title,
  input,
  passwordButton,
  passwordButtonText,
  button,
  buttonText,
  registrationButton,
  registrationButtonText,
} from "./LoginScreenStyle";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const clearUserForm = () => {
    setEmail("");
    setPassword("");
  };
  const onSubmitUserLogin = () => {
    if (!email.trim() || !password.trim()) {
      return console.warn("Будь ласка заповніть поля");
    }

    console.log({ email, password });

    clearUserForm();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={container}>
        <ImageBackground
          style={backgroundImage}
          source={require("../../assets/img/photoBackground.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={authorizeContainer}>
              <Text style={title}>Увійти</Text>
              <View>
                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={input}
                    placeholder="Адреса електронної пошти"
                    placeholderTextColor="#BDBDBD"
                    keyboardType="email-address"
                    autoComplete="email"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
                <View style={{ marginBottom: 43, position: "relative" }}>
                  <TextInput
                    style={input}
                    placeholder="Пароль"
                    autoComplete="off"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={showPassword}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity
                    style={passwordButton}
                    onPress={() =>
                      password !== "" &&
                      setShowPassword((prevState) => !prevState)
                    }
                  >
                    <Text style={passwordButtonText}>Показати</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={button} onPress={onSubmitUserLogin}>
                  <Text style={buttonText}>Увійти</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={registrationButton}>
                <Text style={registrationButtonText}>
                  Немає акаунту?
                  <Text style={{ textDecorationLine: "underline" }}>
                    Зареєструватися
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
