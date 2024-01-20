import { FC } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "@views/SignIn";
import SignUp from "@views/SignUp";
import ForgetPassword from "@views/ForgetPassword";
import Home from "@views/Home";

export type AuthStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

interface Props {}

const AppNavigator: FC<Props> = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
