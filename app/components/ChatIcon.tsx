import { FC } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "@utils/colors";
import LottieView from "lottie-react-native";

interface Props {
  onPress?(): void;
  busy?: boolean;
}

const ChatIcon: FC<Props> = ({ busy, onPress }) => {
  if (busy)
    return (
      <View style={styles.common}>
        <View style={styles.flex1}>
          <LottieView
            style={styles.flex1}
            autoPlay
            loop
            source={require("../../assets/loading_2.json")}
          />
        </View>
      </View>
    );

  return (
    <Pressable onPress={onPress} style={[styles.common, styles.messageBtn]}>
      <AntDesign name="message1" size={20} color={colors.white} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  common: {
    width: 50,
    height: 50,
    bottom: 20,
    right: 20,
    position: "absolute",
  },
  messageBtn: {
    borderRadius: 25,
    backgroundColor: colors.active,
    justifyContent: "center",
    alignItems: "center",
  },
  flex1: {
    flex: 1,
  },
});

export default ChatIcon;
