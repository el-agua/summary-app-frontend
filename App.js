import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

import Signup from "./screens/Signup";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  const [fontsLoaded] = useFonts({
    Agright: require("./assets/fonts/AgrightRegular-VGmjZ.ttf"),
    Migae: require("./assets/fonts/MigaeSemibold-3zd2M.otf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Signup></Signup>
      </SafeAreaView>
    );
  }
}
