import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CreatePostsScreen() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isLocationFocus, setIsLocationFocus] = useState(false);


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
            
              <View>
                <View style={styles.imageBackground}>
                  <View style={styles.photoIconWrap}>
                    <MaterialIcons
                      name="photo-camera"
                      size={24}
                      color="#BDBDBD"
                    />
                  </View>
                </View>
                <Text style={styles.text}>Завантажте фото</Text>
              </View>
            <TextInput
              value={name}
              onChangeText={(value) => setName(value)}
              placeholder="Назва"
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => {
                setIsNameFocus(true);
              }}
              onBlur={() => setIsNameFocus(false)}
              style={{
                ...styles.input,
                borderBottomColor: isNameFocus ? "#ff6c00" : "#e8e8e8",
                marginTop: 30,
              }}
            />
            <View>
              <Ionicons
                name="ios-location-outline"
                size={24}
                color="#BDBDBD"
                style={{
                  ...styles.locationIcon,
                  color: isLocationFocus ? "#ff6c00" : "#BDBDBD",
                }}
              />
              <TextInput
                value={location}
                onChangeText={(value) => setLocation(value)}
                placeholder="Місцевість"
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => {
                  setIsLocationFocus(true);
                }}
                onBlur={() => setIsLocationFocus(false)}
                style={{
                  ...styles.input,
                  borderBottomColor: isLocationFocus ? "#ff6c00" : "#e8e8e8",
                  marginTop: 30,
                  paddingLeft: 25,
                }}
              />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Опублікувати</Text>
            </TouchableOpacity>
            <View style={styles.trashIconWrap}>
              <TouchableOpacity style={styles.trashButton}>
                <FontAwesome5 name="trash-alt" size={24} color="#DADADA" />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 28,
    backgroundColor: "#fff",
  },
  imageBackground: {
    width: "100%",
    height: 200,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  photoIconWrap: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#BDBDBD",
    lineHeight: 19,
  },
  input: {
    width: "100%",
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  locationIcon: {
    position: "absolute",
    bottom: 7,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  buttonText: {
    fontFamily: "Roboto",
    color: "#BDBDBD",
    fontSize: 16,
  },
  trashButton: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  trashIconWrap: {
    alignItems: "center",
    marginTop: 90,
  },
});
