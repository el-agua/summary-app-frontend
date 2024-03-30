import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Paragraph({pText}) {
    const styles = StyleSheet.create({
        container: {
            width: "100%",
        },
        header: {
            fontSize: 25,
            fontWeight: "bold",
            textAlign:"left",
            marginBottom: 10,
            fontFamily: "Migae",
        },
        paragraph: {
            fontFamily: "Times New Roman",
            padding: 15,
            fontSize: 20,
        },
        scrollView: {
            backgroundColor: "#F1F1F1",
            height: "72%",
            borderRadius: 10,
            width: 400,
        },
        endText: {
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 15,
            marginBottom: 30,
        }
    });
    return (
        <View style={styles.container}>
        <Text style={styles.header}>Passage</Text>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.paragraph}>{pText}</Text>
        <Text style={styles.endText}>END OF TEXT</Text>
        </ScrollView>
        </View>
    )
}