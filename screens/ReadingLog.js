import React from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";

import DisplayPassage from "../components/DisplayPassage";
import MovingBar from "../components/MovingBar";
import NavigationBar from "../components/NavigationBar";
import TopHeaderLog from "../components/TopHeaderLog";

export default function ReadingLog() {
  const [response, setResponse] = React.useState("");
  const [day, setDay] = React.useState("");
  const handleChangeDay = (day) => {
    console.log(day);
    setDay(day);
  };
  const handleKeyboard = () => {
    if (Keyboard.isVisible()) {
      Keyboard.dismiss();
    }
  };
  var width = Dimensions.get("window").width;
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
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginTop: 20,
    },
    header: {
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "left",
      marginBottom: 10,
      fontFamily: "Migae",
    },
    bottomContainer: {
      width: width,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F1F1F1",
      height: 50,
    },
    totalTimeStyle: {
      fontSize: 20,
      fontFamily: "Migae",
    },
    splitter: {
      flex: 1,
      justifyContent: "space-between",
    },
  });
  return (
    <View style={styles.splitter}>
      <View
        style={{
          flex: 1,

          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <TopHeaderLog />
        </View>
        <View style={styles.flexContainer}>
          <MovingBar
            color="#ADD8E6"
            progress={120}
            label="Mon"
            k="Monday"
            handleClick={handleChangeDay}
            act={day}
          />
          <MovingBar
            color="#7393B3"
            progress={100}
            label="Tues"
            k="Tuesday"
            handleClick={handleChangeDay}
            act={day}
          />
          <MovingBar
            color="#ADD8E6"
            progress={120}
            label="Wed"
            k="Wednesday"
            handleClick={handleChangeDay}
            act={day}
          />
          <MovingBar
            color="#7393B3"
            progress={100}
            label="Thurs"
            k="Thursday"
            handleClick={handleChangeDay}
            act={day}
          />
          <MovingBar
            color="#ADD8E6"
            progress={120}
            label="Fri"
            k="Friday"
            handleClick={handleChangeDay}
            act={day}
          />
          <MovingBar
            color="#7393B3"
            progress={100}
            label="Sat"
            k="Saturday"
            handleClick={handleChangeDay}
            act={day}
          />
          <MovingBar
            color="#ADD8E6"
            progress={120}
            label="Sun"
            k="Sunday"
            handleClick={handleChangeDay}
            act={day}
          />
        </View>
        <View style={{ width: "100%", marginTop: 30 }}>
          {day ? (
            <Text style={styles.header}>{day} Readings</Text>
          ) : (
            <Text style={styles.header}>Your Weekly Readings</Text>
          )}
        </View>
        <DisplayPassage></DisplayPassage>
        <DisplayPassage></DisplayPassage>
        <DisplayPassage></DisplayPassage>
        <DisplayPassage></DisplayPassage>
        <DisplayPassage></DisplayPassage>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.totalTimeStyle}>Total Time Spent: 26 minutes</Text>
      </View>
      <NavigationBar></NavigationBar>
    </View>
  );
}
