import React from "react";
import { Text, View, StyleSheet } from "react-native";


export default function TopHeader() {
    const styles = StyleSheet.create({
        header: {
            fontSize: 25,
            fontWeight: "bold",
            textAlign:"center",
            fontFamily: "Migae",

        },
        backButton: {
            fontSize: 18,
            marginLeft: 10,
            color: "blue",
            fontFamily: "Migae",
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
        }

    })
    return (
        <View style={styles.container}>
            <Text style={styles.backButton}>Back</Text>
            <Text style={styles.header}>Guided Reading</Text>
            <Text style={styles.filterButton}>Filter</Text>
        </View>
    )
}
