import { View, Text, StyleSheet } from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Публікації</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 375,
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 44,
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    borderBottomWidth: 0.5,
    borderBottomColor: "#0000004d",
  },
});
