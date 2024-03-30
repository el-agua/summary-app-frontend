import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function GuidingButton(props) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 10,
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
        },
        buttonText: {
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "Migae",
        }
    });
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}