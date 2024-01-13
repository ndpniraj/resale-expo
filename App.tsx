import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Navigator from "app/navigator";
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
