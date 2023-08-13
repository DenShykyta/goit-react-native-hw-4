import { useState } from "react";

import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  container,
  backgroundImage,
  registrationContainer,
  avatarContainer,
  avatar,
  addAvatarButton,
  title,
  input,
  showPasswordButton,
  showPasswordButtonText,
  button,
  buttonText,
  logInText,
} from "./RegScreenStyles";
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  const clearUserForm = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };

  const onSubmitUserRegister = () => {
    if (!login || !email || !password) {
      return console.warn("Будь ласка, заповніть поля");
    }

    console.log({ login, email, password });

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
            <View style={registrationContainer}>
              <View style={avatarContainer}>
                <Image style={avatar} />
                <TouchableOpacity style={addAvatarButton}>
                  <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                </TouchableOpacity>
              </View>
              <Text style={title}>Реєстрація</Text>
              <View>
                <View>
                  <TextInput
                    placeholder="Логін"
                    style={{ ...input, marginBottom: 16 }}
                    value={login}
                    onChangeText={setLogin}
                  />
                </View>
                <View>
                  <TextInput
                    placeholder="Адреса електронної пошти"
                    autoComplete="email"
                    style={{ ...input, marginBottom: 16 }}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
                <View style={{ marginBottom: 43, position: "relative" }}>
                  <TextInput
                    placeholder="Пароль"
                    autoComplete="off"
                    style={input}
                    secureTextEntry={showPassword}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity
                    style={showPasswordButton}
                    onPress={() =>
                      password !== "" &&
                      setShowPassword((prevState) => !prevState)
                    }
                  >
                    <Text style={showPasswordButtonText}>Показати</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={button} onPress={onSubmitUserRegister}>
                  <Text style={buttonText}>Зареєструватися</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity>
                <Text style={logInText}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
