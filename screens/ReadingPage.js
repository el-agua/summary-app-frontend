import { useFonts } from "expo-font";
import React, {useEffect, useState} from "react";
import { Keyboard, StyleSheet, Text, Image, View } from "react-native";
import { Dimensions, ScrollView } from "react-native";
import AnimatedProgressWheel from "react-native-progress-wheel";
import { TouchableOpacity } from "react-native";
import tw from "twrnc";
import NavigationBar from "../components/NavigationBar";

export default function ReadingPage({title, text, image_url}) {
    const [topics, setTopics] = useState([])
    const [readabilityLevel, setLevel] = useState(0)

    useEffect(() => {
        fetch("https://aladnamedpat--sentence-comparison-find-topics.modal.run/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'text': text })
        })
        .then((response) => response.json())
        .then((json) => setTopics(json["Passage_topics"]))
        .catch((error) => console.error('Error:', error));
    });

    useEffect(() => {
        fetch("https://aladnamedpat--sentence-comparison-readability.modal.run/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'text': text })
        })
        .then((response) => response.json())
        .then((json) => setLevel(json["grade_level"]))
        .catch((error) => console.error('Error:', error));
    });

    // useEffect(() => {
    //     fetch('https://aladnamedpat--sentence-comparison-readability.modal.run/', {
    //         method : 'POST',
    //         header : {
    //             'Content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify({'text' : text})})
    //         .then((response) => response.json())
    //         .then((json) => setLevel(json))
    //         .catch((error) => console.error('Error:', error))
    //     }
    // )

    return (
        <ScrollView style={tw`flex-1 bg-white p-4`}>
            <View style={tw`flex-row items-center justify-between p-4`}>
                <View style={tw``}>
                    <Text style={tw`text-xl font-bold text-gray-800`}>{title}</Text>
                </View>
                <TouchableOpacity style={tw``}>
                    <Text style={tw`text-blue-500 text-lg font-bold`}>Back</Text>
                </TouchableOpacity>
            </View>

            {image_url && (
                <Image
                    source={{ uri: image_url }}
                    style={tw`w-full h-80 rounded-lg mb-4`}
                    resizeMode="cover"
                />
            )}
            <View style = {tw}>
                <View style={tw`p-4 bg-green-100 rounded-lg mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Topics:</Text>
                    <View style={tw`flex-row flex-wrap justify-between`}>
                        {topics.map((topic, index) => (
                            <View key={index} style={tw`bg-green-200 p-2 rounded-lg m-1`}>
                                <Text style={tw`text-green-800`}>{topic}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={tw`p-4 bg-blue-100 rounded-lg`}>
                    <Text style={tw`text-lg font-semibold`}>Difficulty:</Text>
                    <View style={tw`p-2 bg-blue-200 rounded-lg mt-2`}>
                        <Text style={tw`text-blue-800`}>{readabilityLevel}</Text>
                    </View>
                </View>
                <TouchableOpacity style={tw`mx-auto w-11/12 bg-blue-500 py-3 rounded-full mt-4`}>
                <Text style={tw`text-white text-center text-lg font-bold`}>Begin Reading</Text>
                </TouchableOpacity>      
                <NavigationBar/>     
            </View>
        </ScrollView>
    );
}