import "react-native-gesture-handler";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/RegScreen/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/MainScreens/Home";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <MainStack.Navigator initialRouteName="Registration">
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="Registration"
            component={RegistrationScreen}
          />
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={Home}
          />
        </MainStack.Navigator>
      </NavigationContainer>
  );
}