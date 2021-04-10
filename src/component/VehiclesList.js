import React from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'
import detailsStyle from '../scene/Details/detailsStyle'
import { BLACK, PRIMARY, STATUS_BAR, } from '../config/colors';


const VehicleList = ({ item }) => {
    return (
        <View style={{ marginTop: 10, elevation: 10 }} >
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <Text style={detailsStyle.key} >{item.todos.name}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Model"} : {item.todos.model}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Manufacturer"} : {item.todos.manufacturer}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Cost"} : {item.todos.cost_in_credits}/credits</Text>
                <Text style={detailsStyle.key_child_text2} >{"Length"} : {item.todos.length}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Max Atmosphering Speed"} : {item.todos.max_atmosphering_speed}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Crew"} : {item.todos.crew}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Passengers"} : {item.todos.passengers}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Cargo Capacity"} : {item.todos.cargo_capacity}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Consumables"} : {item.todos.consumables}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Vehicle Class"} : {item.todos.vehicle_class}</Text>
                <Text style={detailsStyle.key_child_text2} >{"Movies"} : {item.todos.films.map((i) => { return (<Text>{i.todos.title}, </Text>) })}</Text>
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
export default VehicleList;
