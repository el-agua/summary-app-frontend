import { useFonts } from "expo-font";
import React from "react";
import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import { Dimensions, ScrollView } from "react-native";
import AnimatedProgressWheel from "react-native-progress-wheel";

import GlobalMetrics from "../components/GlobalMetrics";
import SampleReading from "../components/SampleReading";
import TopHeaderProfile from "../components/TopHeaderProfile";

export default function Profile() {
  const [fontsLoaded] = useFonts({
    Agright: require("../assets/fonts/AgrightRegular-VGmjZ.ttf"),
    Migae: require("../assets/fonts/MigaeSemibold-3zd2M.otf"),
  });
  const [day, setDay] = React.useState("");
  const [search, setSearch] = React.useState("");
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
  const n = 6;
  const styles = StyleSheet.create({
    splitter: {
      flex: 1,
      justifyContent: "space-between",
    },
    labelStyles: {
      fontSize: 50,
      fontWeight: "bold",
      fontFamily: "Migae",
    },
    labelSubtitle: {
      fontSize: 13,
      fontFamily: "Migae",
    },
    header: {
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 15,
      fontFamily: "Migae",
    },
    subheader: {
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "left",
      width: "100%",
      marginVertical: 15,
      fontFamily: "Migae",
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
    textfield: {
      backgroundColor: "#F1F1F1",
      borderRadius: 10,
      width: 400,
      height: 50,
      padding: 15,
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
          <TopHeaderProfile />
        </View>
        <AnimatedProgressWheel
          size={200}
          width={20}
          animateFromValue={0}
          duration={3000}
          max={n}
          showProgressLabel={true}
          subtitle={`out of ${n} passages`}
          subtitleStyle={styles.labelSubtitle}
          labelStyle={styles.labelStyles}
          rotation={"-90deg"}
          rounded
          color={"blue"}
          progress={3}
          backgroundColor={"grey"}
        />

        <Text style={styles.header}>Your Weekly Metrics</Text>
        <GlobalMetrics metric="Conciseness" num={88}></GlobalMetrics>
        <GlobalMetrics metric="Accuracy" num={44}></GlobalMetrics>
        <GlobalMetrics metric="Difficulty" num={23}></GlobalMetrics>

        <TextInput
          onChangeText={(text) => setSearch(text)}
          style={styles.textStyle}
          placeholder="Search"
          placeholderTextColor="grey"
        ></TextInput>

        <Text style={styles.subheader}>Sample Readings</Text>

        <ScrollView horizontal>
          <SampleReading></SampleReading>
          <SampleReading></SampleReading>
          <SampleReading></SampleReading>
          <SampleReading></SampleReading>
          <SampleReading></SampleReading>
        </ScrollView>
      </View>
    </View>
  );
}
