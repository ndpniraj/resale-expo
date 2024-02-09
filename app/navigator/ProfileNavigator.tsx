import { FC } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "@views/Profile";
import Chats from "@views/Chats";
import Listings from "@views/Listings";
import SingleProduct from "@views/SingleProduct";
import { Product } from "app/store/listings";
import ChatWindow from "@views/ChatWindow";
import EditProduct from "@views/EditProduct";

export type ProfileNavigatorParamList = {
  Profile: undefined;
  Chats: undefined;
  Listings: undefined;
  SingleProduct: { product?: Product; id?: string };
  EditProduct: { product: Product };
  ChatWindow: {
    conversationId: string;
    peerProfile: { id: string; name: string; avatar?: string };
  };
};

const Stack = createNativeStackNavigator<ProfileNavigatorParamList>();

interface Props {}

const ProfileNavigator: FC<Props> = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="Listings" component={Listings} />
      <Stack.Screen name="SingleProduct" component={SingleProduct} />
      <Stack.Screen name="ChatWindow" component={ChatWindow} />
      <Stack.Screen name="EditProduct" component={EditProduct} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProfileNavigator;
