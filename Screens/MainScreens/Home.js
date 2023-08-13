import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { Feather, AntDesign } from "@expo/vector-icons";
import {TouchableOpacity, StyleSheet, View } from "react-native";

const BottomTab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <BottomTab.Navigator
      initialRouteName="Публікації"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: styles.header,
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: 83,
          borderTopWidth: 1,
          borderTopColor: "#BDBDBD",
        },
        headerTitleStyle: styles.headerTitle,
      }}
    >
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <Feather name="grid" size={24} color="#212121CC" />
          ),

          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{ marginRight: 16 }}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
        name="Публікації"
        component={PostsScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <View style={styles.plusIcon}>
              <Feather name="plus" size={24} color="#FFFFFF" />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Публікації")}
              style={{ marginLeft: 16 }}
            >
              <AntDesign name="arrowleft" size={24} color="#212121CC" />
            </TouchableOpacity>
          ),
          tabBarStyle: { display: "none" },
        }}
        name="Створити публікацію"
        component={CreatePostsScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <Feather name="user" size={24} color="#212121CC" />
          ),
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 88,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  headerTitle: {
    color: "#212121",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 17,
  },
  plusIcon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
  },
});
