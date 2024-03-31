import { useFonts } from "expo-font";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Home from "./screens/Home";
import WriteSummary from "./screens/WriteSummary";
import ReadingLog from "./screens/ReadingLog";
import Insights from "./screens/Insights";
import Profile from "./screens/Profile";
import AIResponse from "./screens/AI_Response";
import ReadingPage from "./screens/ReadingPage";
// import Login from "./screens/Login";

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
        <ReadingPage title = "some sampling writing" text = " The Flesch-Kincaid Grade Level is a readability metric used to determine how difficult a text is to understand based on the length of words and sentences in the text. The values vary from 0 to 18, where 18 represents the most difficult text. Here's how the grade level should be interpreted:  A grade level of 8 (13- to 15-year-old students) is recommended for English content to be successfully read by 80% of readers in the USA. The level for marketing materials may vary from grade level 6 to 15, where lower levels are okay for short blog posts or emails, and higher levels can be used for ebooks." image_url="https://imagegen10.s3.us-east-2.amazonaws.com/image3.jpeg"/>
      </SafeAreaView>
    );
  }
}
