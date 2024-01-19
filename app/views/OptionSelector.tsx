import colors from "@utils/colors";
import { FC } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  onPress?(): void;
  title: string;
}

const OptionSelector: FC<Props> = ({ title, onPress }) => {
  return (
    <Pressable style={styles.categorySelector} onPress={onPress}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <AntDesign name="caretdown" color={colors.primary} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categorySelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.deActive,
    borderRadius: 5,
  },
  categoryTitle: {
    color: colors.primary,
  },
});

export default OptionSelector;
