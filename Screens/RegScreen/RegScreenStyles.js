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
  registrationContainer: {
    position: "relative",

    paddingTop: 92,
    paddingHorizontal: 16,

    height: "68%",
    flexGrow: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addAvatarButton: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
  title: {
    marginBottom: 32,
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,

    color: "#212121",
  },

  input: {
    paddingLeft: 16,

    height: 50,

    fontSize: 16,
    lineHeight: 19,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  showPasswordButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  showPasswordButtonText: {
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
  button: {
    display: "flex",
    justifyContent: "center",

    height: 51,
    paddingLeft: 32,
    paddingRight: 32,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,

    color: "#fff",
  },
  logInText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 16,
    color: "#1B4371",
  },
});

export const {
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
} = styles;
