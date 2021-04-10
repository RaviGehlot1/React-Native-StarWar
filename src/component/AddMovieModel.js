import React, { useState } from 'react';
import { Modal, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLACK, GRAY, PRIMARY, STATUS_BAR, WHITE, } from '../config/colors';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: WHITE
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: BLACK
    },
    button: {
        fontSize: 18,
        fontWeight: 'bold',
        color: WHITE,
        marginHorizontal: 25,
        marginVertical: 10
    },
    key: { color: BLACK, fontSize: 16.5, fontWeight: 'bold' },
    key_container: { flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 10 }
});

const AddModelVisible = (props) => {

    const [isCalVisible, setIsCalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [titleValid, setTitleValid] = useState(undefined);
    const [release_date, setRelease_date] = useState('')
    const [release_dateValid, setRelease_dateValid] = useState(undefined)
    const [director, setDirector] = useState('')
    const [directorValid, setDirectorValid] = useState(undefined)
    const [producer, setProducer] = useState('')
    const [producerValid, setProducerValid] = useState(undefined)

    const maxDate = new Date(); // Today

    function submitData() {
        if (title.length) {
            if (!isCalVisible && release_date.length) {
                if (director.length) {
                    if (producer.length) {
                        let obj = {
                            title : title,
                            director : director,
                            producer : director,
                            release_date : release_date,
                            type : 'local'
                        }
                        props.onSubmitPressed(obj)
                    } else {
                        setProducerValid(false)
                    }
                } else {
                    setDirectorValid(false)
                }
            } else {
                setIsCalVisible(false)
                setRelease_dateValid(false)
            }
        } else {
            setTitleValid(false)

        }
    }


    console.log(release_dateValid);
    return (
        <Modal visible={props.visible}  >
            <View style={styles.listContainer}>

                <View style={{ marginTop: 10, flex: 5 }}>
                    <ScrollView>
                        <View style={{ alignItems: 'center', }}>
                            <Text style={styles.title} >Add Movie</Text>
                        </View>
                        <View style={{ borderBottomWidth: 1, marginHorizontal: 15, borderColor: titleValid == undefined ? GRAY : titleValid ? GRAY : 'red', marginTop: 10 }} >
                            <TextInput
                                onChangeText={(text) => {
                                    setTitle(text)
                                    if (text.length) {
                                        setTitleValid(true)
                                    } else {
                                        setTitleValid(false)
                                    }
                                }}
                                placeholder={"Title"}
                                placeholderTextColor={GRAY}
                                style={{ fontWeight: 'bold', marginLeft: 15 }}
                            />
                        </View>
                        <View style={{ borderBottomWidth: 1, marginHorizontal: 15, borderColor: release_dateValid == undefined ? GRAY : release_dateValid ? GRAY : 'red' }} >
                            {!isCalVisible ?
                                <TouchableOpacity
                                    onPress={() => setIsCalVisible(true)}
                                    style={{ height: 50, marginLeft: 15, justifyContent: 'center', }}>
                                    <Text style={{ color: GRAY, fontWeight: 'bold' }} >{ release_date.length ? release_date : "Pick a Release Date"}</Text>
                                </TouchableOpacity>
                                :
                                <CalendarPicker
                                    startFromMonday={true}
                                    maxDate={maxDate}
                                    onDateChange={(date) => {
                                        console.log(date.length);
                                        setIsCalVisible(false)
                                        setRelease_date(moment(date).format("YYYY-MM-DD"))
                                        if (date) {
                                            setRelease_dateValid(true)
                                        } else {
                                            setRelease_dateValid(false)
                                        }
                                    }
                                    }
                                />
                            }
                        </View>
                        <View style={{ borderBottomWidth: 1, marginHorizontal: 15, borderColor: directorValid == undefined ? GRAY : directorValid ? GRAY : 'red' }} >
                            <TextInput
                                onChangeText={(text) => {
                                    setDirector(text)
                                    if (text.length) {
                                        setDirectorValid(true)
                                    } else {
                                        setDirectorValid(false)
                                    }
                                }}
                                placeholder={"Director Name"}
                                placeholderTextColor={GRAY}
                                style={{ fontWeight: 'bold', marginLeft: 15 }}
                            />
                        </View>
                        <View style={{ borderBottomWidth: 1, marginHorizontal: 15, borderColor: producerValid == undefined ? GRAY : producerValid ? GRAY : 'red' }} >
                            <TextInput
                                onChangeText={(text) => {
                                    setProducer(text)
                                    if (text.length) {
                                        setProducerValid(true)
                                    } else {
                                        setProducerValid(false)
                                    }
                                }}
                                placeholder={"Producer Name"}
                                placeholderTextColor={GRAY}
                                style={{ fontWeight: 'bold', marginLeft: 15 }}
                            />
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity
                        onPress={() => submitData()}
                        style={{ backgroundColor: GRAY, borderRadius: 10 }}
                    >
                        <Text style={styles.button} >{"Submit"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
export default AddModelVisible;
