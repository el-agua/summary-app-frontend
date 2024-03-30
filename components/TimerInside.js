import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TimerInside(props) {
    const styles = StyleSheet.create({
        timerText: {
            fontWeight: "bold",
            fontSize: 35,
            fontFamily: "Migae",
        },
        smallText: {
            fontSize: 12,
            fontFamily: "Agright",
        },
        container: {
            alignItems: "center",
            justifyContent: "center",
        },
        pausePlay: {
            height: 30,
            width: 30,
            borderRadius: 50,
            backgroundColor: props.pauseState ? "red" : "green",
            alignContent: "center",
            justifyContent: "center",
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Time Remaining</Text>
            <Text style={styles.timerText}>{String(Math.floor(props.remainingTime / 60)).padStart(2, '0')}:{String(props.remainingTime % 60).padStart(2, '0')}</Text>
            
            <TouchableOpacity style={styles.pausePlay} onPress={props.handleToggle}>
                {props.pauseState ?
                    <View style={{alignSelf: "center"}}>
                    <Ionicons  name="pause" size={20} color="white" /> 
                    </View>
                    :
                    <View style={{alignSelf: "center"}}>
                    <Ionicons style={{marginLeft: 2}} name="play" size={20} color="white" />
                    </View>
                }
            </TouchableOpacity>
        </View>
    )
}