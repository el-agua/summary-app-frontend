import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function GlobalMetrics() {
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
            fontSize: 20,
            color: "grey",
        }
        
        
    })
    return (
        <View>
        <View style={styles.container}>
            <View style={styles.smallContainer}>
                <Text style={styles.textDetails}>{props.metric}</Text>
            </View>
            
            <View><Text style={styles.textSmall}>Great!</Text></View>
            <View><Text style={styles.textSmall}>Needs Improvement</Text></View>
            <View><Text style={styles.textSmall}></Text></View>
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