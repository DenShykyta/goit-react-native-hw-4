import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",

    flexDirection: "column",
    alignItems: "stretch",

    resizeMode: "cover",
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  authorizeContainer: {
    paddingHorizontal: 16,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexGrow: 1,
    height: "60%",
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",

    marginTop: 32,
    marginBottom: 32,
    color: "#212121",
  },

  input: {
    height: 50,
    paddingLeft: 16,

    color: "#212121",
    fontSize: 16,
    lineHeight: 19,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  passwordButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  passwordButtonText: {
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",

    height: 51,
    marginBottom: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  registrationButton: {},
  registrationButtonText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#1B4371",
  },
});
export const {
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
} = styles;
