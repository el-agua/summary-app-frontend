import React from "react";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

import GuidingButton from "../components/GuidingButton";
import TopHeaderWriting from "../components/TopHeaderWriting";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function WriteSummary({navigation}) {
  const [response, setResponse] = React.useState("");
  const handleKeyboard = () => {
    if (Keyboard.isVisible()) {
      Keyboard.dismiss();
    }
  };
  const styles = StyleSheet.create({
    textfield: {
      backgroundColor: "#F1F1F1",
      height: "72%",
      borderRadius: 10,
      width: 400,
      padding: 15,
    },
    textStyle: {
      fontSize: 20,
      height: "100%",
    },
  });
  return (
    <TouchableWithoutFeedback onPress={handleKeyboard} edges = {["top"]}>
      <SafeAreaView
        style={{
          flex: 1,

          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <TopHeaderWriting navigation = {navigation}/>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={styles.textfield}>
            <TextInput
              onChangeText={(text) => setResponse(text)}
              style={styles.textStyle}
              multiline
              placeholder="Write your response!"
            ></TextInput>
          </View>
        </View>
        <View style={{ position: "absolute", bottom: 10 }}>
          <GuidingButton title="Finished Writing"></GuidingButton>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
