import { View, StyleSheet, Text } from "react-native";

interface Props<T> {
  data: T[];
  col?: number;
  renderItem(item: T): JSX.Element;
}

const GridView = <T extends unknown>(props: Props<T>) => {
  const { data, col = 2, renderItem } = props;

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View style={{ width: `${100 / col}%` }} key={index}>
            {renderItem(item)}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default GridView;
