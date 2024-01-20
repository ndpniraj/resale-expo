import { FC } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "@utils/colors";
import size from "@utils/size";

interface Props {
  indicate?: boolean;
  onPress?(): void;
}

const ChatNotification: FC<Props> = ({ indicate, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons
        name="message"
        size={24}
        color={indicate ? colors.active : colors.primary}
      />
      {indicate && <View style={styles.indicator} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: size.padding,
    alignSelf: "flex-end",
    position: "relative",
  },
  indicator: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: colors.active,
    position: "absolute",
    top: 0,
    right: 10,
    borderWidth: 2,
    borderColor: colors.white,
  },
});

export default ChatNotification;
