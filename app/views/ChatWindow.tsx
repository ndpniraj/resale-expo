import AppHeader from "@components/AppHeader";
import BackButton from "@ui/BackButton";
import { FC } from "react";
import { View, StyleSheet } from "react-native";

interface Props {}

const ChatWindow: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <AppHeader backButton={<BackButton />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ChatWindow;
