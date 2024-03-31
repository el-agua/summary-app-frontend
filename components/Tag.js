import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Tag(props) {
  const styles = StyleSheet.create({
    tagText: {
      fontFamily: "Migae",
      fontSize: 10,
    },
    smallBox: {
      backgroundColor: props.color,
      borderRadius: 50,
      height: 20,
      width: 60,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "left",
      marginLeft: 5,
    },
  });
  return (
    <View style={styles.smallBox}>
      <Text style={styles.tagText}>{props.title}</Text>
    </View>
  );
}
