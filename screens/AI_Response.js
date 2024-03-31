import React from "react";
import { ScrollView, View, Text } from "react-native";
import AnimatedProgressWheel from 'react-native-progress-wheel';
import ResponseMetric from "../components/ResponseMetric";
import tw from 'twrnc';
import NavigationBar from "../components/NavigationBar";

export default function AIResponse() {
    const n = 6;

    return (
        <View style={tw`flex-1`}>
        <ScrollView style={tw`flex-1`}>
            <View style={tw`items-center justify-center py-5`}>
                <Text style={tw`text-2xl font-bold my-6`}>Your Comprehensive Summary</Text>
                        <AnimatedProgressWheel 
                        size={200}
                        width={20}
                        animateFromValue={0}
                        duration={3000}
                        max={n}
                        showProgressLabel={true}
                        subtitle={`out of ${n} minutes`} // How many minutes they actually spent reading
                        subtitleStyle={tw`text-sm text-gray-500`}
                        labelStyle={tw`text-lg font-bold text-green-800`} // Green color for the text
                        rotation={'-90deg'}
                        rounded
                        color={'blue'}
                        progress={3} // Add actual reading time here
                        backgroundColor={'grey'}
                    />
            </View>

            {/* Assuming ResponseMetric can accept and apply style prop */}
            <ResponseMetric style = {tw`p-2 m-6`} conciseness={6} accuracy={7} difficulty={9} />

            <View style={tw`bg-green-50 p-4 rounded-lg shadow m-2`}>
            {/* Header for the AI Feedback section */}
            <Text style={tw`text-xl font-bold mb-2 bg-green-200 p-2 rounded text-green-900`}>
                AI Feedback
            </Text>
            {/* Placeholder for dynamic AI feedback */}
            <Text style={tw`text-base mb-4 p-2 bg-white rounded shadow`}>
                Generated Feedback space
            </Text>

            {/* Header for the AI Generated Summary section */}
            <Text style={tw`text-xl font-bold mb-2 bg-green-200 p-2 rounded text-green-900`}>
                AI Generated Summary
            </Text>
            {/* Placeholder for dynamic AI generated summary */}
            <Text style={tw`text-base p-2 bg-white rounded shadow`}>
                AI Summary
            </Text>
        </View>
        </ScrollView>
        <NavigationBar>     </NavigationBar>
        </View>

    );
}

// const styles = StyleSheet.create({
// scrollView: {
//     flex: 1,
//     backgroundColor: '#F9F9FB', // Light background color for the entire ScrollView
// },
// container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 20, // Added vertical padding for spacing
// },
// title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333', // Dark color for better readability
//     marginVertical: 10, // Added margin for spacing between title and content
// },
// pd8: {
//     padding: 8,
// },
// metrics: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '90%', // Adjust width to not span completely to the edges
//     alignSelf: 'center', // Center the metrics view
//     marginBottom: 20, // Margin at the bottom for spacing
// },
// metrics2: {
//     flexDirection: "column",
//     paddingLeft: 10,
// },
// labelSubtitle: {
//     fontSize: 12, // Increased subtitle font size for readability
//     color: '#666', // Subdued color for subtitles
// },
// labelStyles: {
//     fontSize: 16, // Ensure label font size is readable
//     fontWeight: 'bold',
//     color: '#000', // Strong color for labels
// },
// AI_Format: {
//     flexDirection: 'column',
//     alignItems: 'stretch',
//     padding: 10, // Padding around AI feedback and summary for spacing
// },
// });