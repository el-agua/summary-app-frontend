import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function DisplayPassage() {
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
            marginLeft: 10,
        },
        textSmall: {
            fontSize: 15,
            color: "grey",
        }
        
        
    })
    return (
        <View>
        <View style={styles.container}>
            <View style={styles.smallContainer}>
                <View style={styles.circle}></View>
                <Text style={styles.textDetails}>Text 1</Text>
            </View>
            
            <View><Text style={styles.textSmall}>Statistic</Text></View>
        </View>
        <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      </View>
    )
}