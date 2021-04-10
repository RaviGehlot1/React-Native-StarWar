import React from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'
import detailsStyle from '../scene/Details/detailsStyle'
import { BLACK, PRIMARY, STATUS_BAR, } from '../config/colors';


const SpeciesList = ({ item }) => {
    return (
        <View style={{ marginTop: 10, elevation: 10 }} >
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <Text style={detailsStyle.key} >{item.todos.name}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Classification"} : {item.todos.classification}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Designation"} : {item.todos.designation}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Average Height"} : {item.todos.average_height}/credits</Text>
                <Text style={detailsStyle.key_child_text2} >{"Skin Colors"} : {item.todos.skin_colors}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Hair Colors"} : {item.todos.hair_colors}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Eye Colors"} : {item.todos.eye_colors}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Average Lifespan"} : {item.todos.average_lifespan}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Language"} : {item.todos.language}</Text>
                {/* <Text style={detailsStyle.key_child_text2} >{"People"} : {item.todos.people.map((i) => { return (<Text>{i.todos.name}, </Text>) })}</Text> */}
                <Text style={detailsStyle.key_child_text2} >{"Movies"} : {item.todos.films.map((i) => { return (<Text>{i.todos.title}, </Text>) })}</Text>
            </View>
        </View>
    )
}
export default SpeciesList;
