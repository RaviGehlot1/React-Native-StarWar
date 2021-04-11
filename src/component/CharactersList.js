import React from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'
import detailsStyle from '../scene/Details/detailsStyle'
import { BLACK, PRIMARY, STATUS_BAR, } from '../config/colors';


const CharactersList = ({ item }) => {
    return (
        <View style={{ marginTop: 10, elevation: 10 }} >
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <Text style={detailsStyle.key} >{item.todos.name}<Text style={detailsStyle.key_child_text1} > {item.todos.gender !== "n/a" ? "(" + item.todos.gender + ")" : null}</Text></Text>
                <Text style={detailsStyle.key_child_text2} >{"Birth Year"} : {item.todos.birth_year}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Height"} : {item.todos.height}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Mass"} : {item.todos.mass}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Hair Color"} : {item.todos.hair_color}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Skin Color"} : {item.todos.skin_color}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Eye Color"} : {item.todos.eye_color}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Movies"} : {item.todos.films.map((i) => { return (<Text>{i.todos.title}, </Text>) })}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Starships"} : {item.todos.starships.map((i) => { return (<Text>{i.todos.name}, </Text>) })}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Species"} : {item.todos.species.map((i) => { return (<Text>{i.todos.name}, </Text>) })}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Vehicles"} : {item.todos.vehicles.map((i) => { return (<Text>{i.todos.name}, </Text>) })}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Planets"} : {item.todos.homeworld.map((i) => { return (<Text>{i.todos.name}, </Text>) })}</Text>
                {/* {item.todos.films.map((i) => {
                  // console.log("heelo", i);
                  return(
                    <View>
                      <Text>{i.todos.title}</Text>
                    </View>
                  )
                })
                } */}
            </View>
        </View>
    )
}
export default CharactersList;
