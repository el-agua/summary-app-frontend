import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Tag from "./Tag";

export default function SampleReading() {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 15,
    },
    tinyLogo: {
      width: 180,
      height: 180,
      borderRadius: 30,
    },
    smallText: {
      fontFamily: "Migae",
      fontSize: 15,
      marginVertical: 5,
    },
    tagText: {
      fontFamily: "Migae",
      fontSize: 10,
    },
    smallBox: {
      backgroundColor: "red",
      borderRadius: 50,
      height: 20,
      width: 60,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "left",
      marginLeft: 20,
    },
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Text style={styles.smallText}>Romeo and Juliet</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Tag title="Literature" color="red" />
        <Tag title="Easy" color="green" />
      </View>
    </View>
  );
}
