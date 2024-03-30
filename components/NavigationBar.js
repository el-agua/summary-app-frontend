import React from "react";
import { Text, View, StyleSheet } from "react-native";
import NavigationButton from "./NavigationButton";

export default function NavigationBar() {
    const [active, setActive] = React.useState("");

    handleActiveChange = (view) => {
        setActive(view);
        console.log(view)
    }
    styles = StyleSheet.create({
        container: {
            width: "100%",
            display: "flex",
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 40,
        }
    })
    return (
        <View style={styles.container}>
            <NavigationButton handleClick={handleActiveChange} act={active} k="Log" title="Log"/>
            <NavigationButton handleClick={handleActiveChange} act={active} k="Insights" title="Insights"/>
            <NavigationButton handleClick={handleActiveChange} act={active} k="Profile" title="Profile"/>
        </View>
    )
}