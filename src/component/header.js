import React from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLACK, PRIMARY, STATUS_BAR,  } from '../config/colors';


const Header = (props) => {
    console.log(props);
    if (props.title !== "Star War") {
        return (
            <View style={{ backgroundColor: PRIMARY, height: 60 , elevation : 5 }}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor={STATUS_BAR} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontSize: 20, color: BLACK, fontWeight: 'bold' }} >{props.title}</Text>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{ backgroundColor: PRIMARY, height: 60, elevation : 5 }}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor={STATUS_BAR} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

                    </View>
                    <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 20, color: BLACK, fontWeight: 'bold', marginRight : 60 }} >{props.title}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
export default Header;
