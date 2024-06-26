import React from "react";
import { View, Text , TextInput, StyleSheet, Keyboard, Touchable} from "react-native";
import Paragraph from "../components/Paragraph";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import TimerInside from "../components/TimerInside";
import GuidingButton from "../components/GuidingButton";
import TopHeaderLog from "../components/TopHeaderLog";
import { TouchableWithoutFeedback, Dimensions } from "react-native";
import MovingBar from "../components/MovingBar";
import DisplayPassage from "../components/DisplayPassage";
import NavigationBar from "../components/NavigationBar";
import TopHeaderInsights from "../components/TopHeaderInsights";
import AnimatedProgressWheel from 'react-native-progress-wheel';

export default function Profile() {
    const [response, setResponse] = React.useState("")
    const [day, setDay] = React.useState("")
    const handleChangeDay = (day) => {
        console.log(day)
        setDay(day)
    }
    const handleKeyboard = () => {
        if (Keyboard.isVisible()){
            Keyboard.dismiss()
        }
    }
    var width = Dimensions.get('window').width
    const n = 6;
    const styles = StyleSheet.create({
        splitter: {
            flex: 1,
            justifyContent: "space-between"
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
            textAlign:"center",
            marginVertical: 15,
            fontFamily: "Migae",
        },
        
    })
    return (
        <View style={styles.splitter}>
        <View
        style={{
            flex: 1,

            alignItems: "center",
            paddingHorizontal:20
        }}
        >
            <View style={{marginBottom: 20}}>
        <TopHeaderInsights/>
        </View>
        <AnimatedProgressWheel 
    size={200}
    width={20} 
    animateFromValue={0}
    duration={3000}
    max={n}
    showProgressLabel={true}
    subtitle={ `out of ${n} passages`}
    subtitleStyle={styles.labelSubtitle}
    labelStyle={styles.labelStyles}
    rotation={'-90deg'}
    rounded
    color={'blue'}
    progress={3}
    backgroundColor={'grey'}
/>
<Text style={styles.header}>Profile</Text>
    <DisplayPassage></DisplayPassage>
    <DisplayPassage></DisplayPassage>
    <DisplayPassage></DisplayPassage>
    <DisplayPassage></DisplayPassage>
    <DisplayPassage></DisplayPassage>
    
        </View>
    <NavigationBar></NavigationBar>
        </View>
    
    );
}