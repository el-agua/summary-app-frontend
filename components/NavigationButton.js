import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function NavigationButton(props) {
  const styles = StyleSheet.create({
    container: {
      width: 60,
      display: "flex",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      fontSize: 12,
      fontFamily: "Migae",
      color: "black",
      marginTop: 5,
    },
    circle: {
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: props.act == props.k ? "green" : "grey",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          props.handleClick(props.k);
        }}
      ></TouchableOpacity>
      <Text style={styles.button}>{props.title}</Text>
    </View>
  );
}
