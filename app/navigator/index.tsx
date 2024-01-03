import { FC } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import colors from "@utils/colors";
import AuthNavigator from "./AuthNavigator";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};

interface Props {}

const Navigator: FC<Props> = (props) => {
  return (
    <NavigationContainer theme={MyTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Navigator;
