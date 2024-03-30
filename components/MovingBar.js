import React from "react"
import {View, Text, StyleSheet} from "react-native"
import { TouchableWithoutFeedback, TouchableOpacity } from "react-native"

export default function MovingBar (props) {
    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            width: 55,
        },
        bar: {
            height: 150-props.progress,
            width: 15,
            backgroundColor: "#E1E1E1",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
        },
        barsmall: {
            height: props.progress,
            width: 15,
            backgroundColor: (props.k == props.act) ? "green" : props.color,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
        },
        label: {
            fontSize: 13,
            fontFamily: "Migae",
            marginTop: 15,
            transform: [{ rotate: '-30deg'}]
        } 
    
    })
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.handleClick(props.k)}>
            <View>
            <View style={styles.bar}></View>
            <View style={styles.barsmall}></View>
            <Text style={styles.label}>{props.label}</Text>
            </View>
        </TouchableOpacity>
    )
}