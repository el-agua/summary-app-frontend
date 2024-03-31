import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function GlobalMetrics(props) {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      paddingHorizontal: 10,
      paddingVertical: 15,
    },
    smallContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    circle: {
      width: 20,
      height: 20,
      borderRadius: 50,
      backgroundColor: "blue",
      justifyContent: "center",
      alignItems: "center",
    },
    textDetails: {
      fontSize: 20,
      fontFamily: "Migae",
    },
    textSmallGreen: {
      fontSize: 20,
      color: "green",
      fontFamily: "Migae",
    },
    textSmallYellow: {
      fontSize: 20,
      color: "#FFC000",
      fontFamily: "Migae",
    },
    textSmallRed: {
      fontSize: 20,
      color: "red",
      fontFamily: "Migae",
    },
  });
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.smallContainer}>
          <Text style={styles.textDetails}>{props.metric}</Text>
        </View>
        {props.num < 33 ? (
          <View>
            <Text style={styles.textSmallRed}>Area of Concern</Text>
          </View>
        ) : props.num < 66 ? (
          <View>
            <Text style={styles.textSmallYellow}>Needs Improvement</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.textSmallGreen}>Great!</Text>
          </View>
        )}
      </View>
      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
    </View>
  );
}
