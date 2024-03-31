import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import * as SecureStore from "expo-secure-store";

import SubmitButton from "../components/SubmitButton";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const store = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
    const token = await SecureStore.getItemAsync(key);
    console.log("Hi")
    console.log(token);
  };
  const login = () => {
      fetch("http://8855-2607-fb91-bd21-d57a-385c-4f96-ee32-b9b3.ngrok-free.app/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
            console.log(data)
            store('token', data.sessionID)
        });
        
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      width: "100%",
    },
    header: {
      fontSize: 40,
      textAlign: "center",
      marginBottom: 20,
      fontFamily: "Migae",
      marginTop: 50,
    },
    smallText: {
      fontSize: 18,
      textAlign: "center",
      color: "green",
      fontFamily: "Migae",
      marginTop: 10,
    },
    textStyle: {
      fontSize: 20,
      height: 60,
      width: 400,
      backgroundColor: "#F1F1F1",
      color: "black",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginTop: 15,
      fontFamily: "Migae",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        onChangeText={(text) => setUsername(text)}
        style={styles.textStyle}
        placeholder="Username"
        placeholderTextColor="grey"
      ></TextInput>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={styles.textStyle}
        placeholder="Password"
        placeholderTextColor="grey"
      ></TextInput>
      <Text style={styles.smallText}>Don't have an account?</Text>
      <SubmitButton handlePress={login} title="Submit"></SubmitButton>
    </View>
  );
}
