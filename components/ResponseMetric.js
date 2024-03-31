import React, {useState} from "react";
import { View, Text, TouchableOpacity, Modal} from "react-native";
import tw from 'twrnc';

const getColorClass = (value) => {
    if (value < 3) return 'bg-red-400'; // Red for values below 3
    if (value > 7) return 'bg-green-400'; // Green for values above 7
    return 'bg-yellow-400'; // Yellow for values in between
  };

  export default function ResponseMetric({ accuracy, conciseness, difficulty }) {
    const [modalVisibleA, setModalVisibleA] = useState(false);
    const [modalVisibleC, setModalVisibleC] = useState(false);
    const [modalVisibleD, setModalVisibleD] = useState(false);

    return (
        <View style={tw`flex-row justify-around items-center p-1`}>
            {/* Accuracy Box */}

            <TouchableOpacity onPress={() => setModalVisibleA(true)} style={[tw`${getColorClass(accuracy)} p-2 rounded-lg justify-center`, { width: 120, height: 120 }]}>
                <Text style={tw`text-md font-bold text-white text-center`}>Accuracy</Text>
                <Text style={tw`text-lg font-bold text-white text-center`}>{accuracy}</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleA}
                onRequestClose={() => setModalVisibleA(false)}
            >
                <View style={tw`flex-1 justify-center items-center`}>
                    <View style={tw`m-4 bg-white p-5 rounded-lg shadow-xl`}>
                        <Text style={tw`mb-4 font-bold text-xl`}>Accuracy Details</Text>
                        {/* Contents of the modal go here */}
                        <Text style={tw`mb-4 text-gray-800`}>You scored an accuracy score You scored an accuracy score of scored an accuracy score of:</Text>
                        <Text style={tw`mb-4 text-gray-800 text-center font-bold text-lg`}>{accuracy}</Text>
                        <Text style={tw`mb-4 text-gray-800`}>Accuracy is measured based off of the semantic similarity of your summary to the generated summary. It is NOT a perfect measurement, but it is a good estimate of how good your summary was.</Text>

                        {/* Button to close the modal */}
                        <TouchableOpacity
                            style={tw`bg-blue-500 p-2 rounded-md`}
                            onPress={() => setModalVisibleA(false)}
                        >
                            <Text style={tw`text-white text-center font-bold`}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity onPress={() => setModalVisibleC(true)} style={[tw`${getColorClass(conciseness)} p-2 rounded-lg justify-center`, { width: 120, height: 120 }]}>
                <Text style={tw`text-md font-bold text-white text-center`}>Conciseness</Text>
                <Text style={tw`text-lg font-bold text-white text-center`}>{conciseness}</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleC}
                onRequestClose={() => setModalVisibleC(false)}
            >
                <View style={tw`flex-1 justify-center items-center`}>
                    <View style={tw`m-4 bg-white p-5 rounded-lg shadow-xl`}>
                        <Text style={tw`mb-4 font-bold text-xl`}>Conciseness Details</Text>
                        {/* Contents of the modal go here */}
                        <Text style={tw`mb-4 text-gray-800 text-center font-bold text-lg`}>{conciseness}</Text>
                        <Text style={tw`mb-4 text-gray-800`}>Conciseness is measured based off of the ratio of the amount of words you used in comparison to the amount of words in the generated summary. Conciseness is not correlated with accuracy. You should aim to score higher in accuracy than in conciseness.</Text>
                        {/* Button to close the modal */}
                        <TouchableOpacity
                            style={tw`bg-blue-500 p-2 rounded-md`}
                            onPress={() => setModalVisibleC(false)}
                        >
                            <Text style={tw`text-white text-center font-bold`}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity onPress={() => setModalVisibleD(true)} style={[tw`${getColorClass(difficulty)} p-2 rounded-lg justify-center`, { width: 120, height: 120 }]}>
                <Text style={tw`text-md font-bold text-white text-center`}>Difficulty</Text>
                <Text style={tw`text-lg font-bold text-white text-center`}>{difficulty}</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleD}
                onRequestClose={() => setModalVisibleD(false)}
            >
                <View style={tw`flex-1 justify-center items-center`}>
                    <View style={tw`m-4 bg-white p-5 rounded-lg shadow-xl`}>
                        <Text style={tw`mb-4 font-bold text-xl`}>Difficulty Details</Text>
                        <Text style={tw`mb-4 text-gray-800 text-center font-bold text-lg`}>{difficulty}</Text>
                        <Text style={tw`mb-4 text-gray-800`}>Difficulty is measured based off of the Flesch-Kincaid scale for measuring text difficulty. It is a metric developed by the US government to interpret the readability of manuals. It is NOT a perfect measurement of text difficulty as it does not account for word difficulty.</Text>

                        {/* Contents of the modal go here */}
                        <Text style={tw`mb-4 text-gray-800`}></Text>
                        {/* Button to close the modal */}
                        <TouchableOpacity
                            style={tw`bg-blue-500 p-2 rounded-md`}
                            onPress={() => setModalVisibleD(false)}
                        >
                            <Text style={tw`text-white text-center font-bold`}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* <View style={[tw`${getColorClass(accuracy)} p-2 rounded-lg justify-center`, { width: 120, height: 120 }]}>
                <Text style={tw`text-md font-bold text-white text-center`}>Accuracy</Text>
                <Text style={tw`text-lg font-bold text-white text-center`}>{accuracy}</Text>
            </View> */}

            {/* Conciseness Box */}
            {/* <View style={[tw`${getColorClass(conciseness)} p-2 rounded-lg justify-center`, { width: 120, height: 120 }]}>
                <Text style={tw`text-md font-bold text-white text-center`}>Conciseness</Text>
                <Text style={tw`text-lg font-bold text-white text-center`}>{conciseness}</Text>
            </View> */}

            {/* Difficulty Box */}
            {/* <View style={[tw`${getColorClass(difficulty)} p-2 rounded-lg justify-center`, { width: 120, height: 120 }]}>
                <Text style={tw`text-md font-bold text-white text-center`}>Difficulty</Text>
                <Text style={tw`text-lg font-bold text-white text-center`}>{difficulty}</Text>
            </View> */}
        </View>
    );
}
// import React from "react";
// import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

// export default function ResponseMetric(props){
//     const styles = StyleSheet.create({
//         scrollView : {
//             flex : 1
//         },
//         container: {
//             // This is the default value but added here for clarity
//             flexDirection: 'column',
//             alignItems: 'center', // Align items along the cross axis (horizontal)
//             justifyContent:'center'
//         },
//         title: {
//             fontSize : 24,
//             fontWeight: 'bold'
//         },
//         pd8 : {
//             paddingTop: 10,
//             paddingBottom: 10
//         },
//         metrics : {
//             flexDirection : 'row',
//             justifyContent: 'space-between', // Space out child Views
//         },
//         metrics2 : {
//             flexDirection : "column",
//             paddingLeft : 10,
//             paddingBottom : 10
//         }
//     })
//         return (
//         <View>
//             <View style={[styles.metrics]}> 
//                 <View style ={[ styles.metrics2]}>
//                     <Text style = {{fontSize : 24, fontWeight : 'bold'}}>Accuracy</Text>
//                     <Text style = {{fontSize : 6, fontWeight : 'medium'}}>([The semantic similarity of your summary against modeled summary])</Text>
//                 </View>  
//                 <View>
//                     <Text style = {{fontSize : 24, fontWeight : 'bold', paddingRight : 10}}> {props.accuracy} </Text>
//                 </View>
//             </View>
//             <View style={[styles.metrics]}> 
//                 <View style ={[ styles.metrics2]}>
//                     <Text style = {{fontSize : 24, fontWeight : 'bold'}}>Conciseness</Text>
//                     <Text style = {{fontSize : 6, fontWeight : 'medium'}}>(Conciness is a measure of how short your responses are)</Text>
//                 </View>  
//                 <View>
//                     <Text style = {{fontSize : 24, fontWeight : 'bold', paddingRight : 10}}> {props.conciseness} </Text>
//                 </View>
//             </View>
//             <View style={[styles.metrics]}> 
//                 <View style ={[ styles.metrics2]}>
//                     <Text style = {{fontSize : 24, fontWeight : 'bold'}}>Difficulty</Text>
//                     <Text style = {{fontSize : 6, fontWeight : 'medium'}}>(Difficulty of the text you read on the Flesch-Kincaid scale)</Text>
//                 </View>  
//                 <View>
//                     <Text style = {{fontSize : 24, fontWeight : 'bold', paddingRight : 10}}> {props.difficulty} </Text>
//                 </View>
//             </View>
//         </View>
//     )
// }

