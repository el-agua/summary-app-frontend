import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function TopHeader({navigation}) {
  const styles = StyleSheet.create({
    header: {
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "Migae",
    },
    backButton: {
      fontSize: 18,
      marginLeft: 10,
      color: "blue",
      fontFamily: "Migae",
      justifySelf: "left",
      width: 50,
    },
    filterButton: {
      fontSize: 18,
      marginRight: 10,
      color: "blue",
      fontFamily: "Migae",
      width: 50,
    },
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Write Summary</Text>
      <Text style={styles.filterButton}></Text>
    </View>
  );
}
