import React from "react";
import { View, Text , TextInput, StyleSheet, Keyboard, Touchable} from "react-native";
import Paragraph from "../components/Paragraph";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import TimerInside from "../components/TimerInside";
import GuidingButton from "../components/GuidingButton";
import TopHeaderWriting from "../components/TopHeaderWriting";
import { TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

export default function WriteSummary() {
    const [response, setResponse] = React.useState("")
    const handleKeyboard = () => {
        if (Keyboard.isVisible()){
            Keyboard.dismiss()
        }
    }
    const styles = StyleSheet.create({
        textfield: {
            backgroundColor: "#F1F1F1",
            height: "72%",
            borderRadius: 10,
            width: 400,
            padding: 15,
        },
        textStyle: {
            fontSize: 20,
            height: "100%"
        }
    })
    return (
        <TouchableWithoutFeedback onPress={handleKeyboard}>
        <View
        style={{
            flex: 1,

            alignItems: "center",
            paddingHorizontal:20
        }}
        >
            <View style={{marginBottom: 20}}>
        <TopHeaderWriting/>
        </View>
  <View style={{marginTop: 20}}>
        
        <View style={styles.textfield}>
        <TextInput onChangeText={(text) => setResponse(text)} 
                    style={styles.textStyle} 
                    multiline 
                    placeholder="Write your response!">
                    
        </TextInput>
        </View>
    
    </View>
        <View style={{position: "absolute", bottom: 10}}>
        <GuidingButton title="Finished Writing"></GuidingButton>
        </View>
        
    </View>
    </TouchableWithoutFeedback>
        
    );
}