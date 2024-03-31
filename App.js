import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Home from "./screens/Home";
import WriteSummary from "./screens/WriteSummary";
import ReadingLog from "./screens/ReadingLog";
import Insights from "./screens/Insights";
import Profile from "./screens/Profile";
import AIResponse from "./screens/AI_Response";
import { useFonts } from 'expo-font';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  const [fontsLoaded] = useFonts({
    'Agright': require('./assets/fonts/AgrightRegular-VGmjZ.ttf'),
    'Migae': require('./assets/fonts/MigaeSemibold-3zd2M.otf')
  });
  return (
    <SafeAreaView style={styles.container}>
      <AIResponse/>
    </SafeAreaView>
  );
}
