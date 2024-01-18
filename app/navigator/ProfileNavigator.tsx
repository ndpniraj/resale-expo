import { FC } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "@views/Profile";
import Chats from "@views/Chats";
import Listings from "@views/Listings";

export type ProfileNavigatorParamList = {
  Profile: undefined;
  Chats: undefined;
  Listings: undefined;
};

const Stack = createNativeStackNavigator<ProfileNavigatorParamList>();

interface Props {}

const ProfileNavigator: FC<Props> = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="Listings" component={Listings} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProfileNavigator;
