import colors from "@utils/colors";
import { FC } from "react";
import { StyleSheet, Pressable, Text } from "react-native";

interface Props {
  title: string;
  active?: boolean;
  onPress?(): void;
}

const AppButton: FC<Props> = ({ title, active = true, onPress }) => {
  return (
    <Pressable
      onPress={active ? onPress : null}
      style={[styles.button, active ? styles.btnActive : styles.btnDeActive]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  btnActive: {
    backgroundColor: colors.primary,
  },
  btnDeActive: {
    backgroundColor: colors.deActive,
  },
  title: {
    color: colors.white,
    fontWeight: "700",
    letterSpacing: 1,
  },
});

export default AppButton;
