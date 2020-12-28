import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, TouchableOpacityWithoutFeedback, TouchableOpacity } from 'react-native';
import { Shadow, Neomorph, NeomorphBlur } from 'react-native-neomorph-shadows';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ExampleShadow = () => {
    const [shadowColor, setShadowColor] = useState(true)
    return (
        <View style={styles.main}>

            <View style={{ left: 10 }}>
                <Neomorph
                    style={{
                        shadowRadius: 3,
                        borderRadius: 25,
                        backgroundColor: '#CCDEFA',
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Neomorph
                        inner
                        style={{
                            shadowRadius: 7,
                            borderRadius: 40 / 2,
                            backgroundColor: '#EF6000',
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <TouchableOpacity activeOpacity={1} >

                                <Neomorph
                                    style={{
                                        shadowRadius: 11.5,
                                        borderRadius: 35 / 2,
                                        backgroundColor: '#CCDEFA',
                                        width: 35,
                                        height: 35,
                                    }}
                                >
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                                    <Ionicons name='play-back-sharp' size={18} color="#EF6000" />
                                    </View>
                            </Neomorph>
                        </TouchableOpacity>
                    </Neomorph>
                </Neomorph>
            </View>

            
            <Neomorph
                style={{
                    shadowRadius: 3,
                    borderRadius: 60,
                    backgroundColor: '#CCDEFA',
                    width: 120,
                    height: 120,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Neomorph
                    inner
                    style={{
                        shadowRadius: 7,
                        borderRadius: 60,
                        backgroundColor: shadowColor ? "#EF6000" : "#1A863A",
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity activeOpacity={1} onPress={() => setShadowColor(!shadowColor)}>

                        {shadowColor ?

                            <Neomorph
                                style={{
                                    shadowRadius: 11.5,
                                    borderRadius: 90 / 2,
                                    backgroundColor: '#CCDEFA',
                                    width: 90,
                                    height: 90,
                                }}
                            >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                                    <Ionicons name='play-sharp' size={30} color="#EF6000" />
                                </View>
                            </Neomorph>

                            :
                            <Neomorph
                                style={{
                                    shadowRadius: 11.5,
                                    borderRadius: 90 / 2,
                                    backgroundColor: '#CCDEFA',
                                    width: 90,
                                    height: 90,
                                }}
                            >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                                    <Ionicons name='pause-sharp' size={30} color="#1A863A" />
                                </View>
                            </Neomorph>

                        }
                    </TouchableOpacity>
                </Neomorph>
            </Neomorph>



            <View style={{ right: 10 }}>
                <Neomorph
                    style={{
                        shadowRadius: 3,
                        borderRadius: 25,
                        backgroundColor: '#CCDEFA',
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Neomorph
                        inner
                        style={{
                            shadowRadius: 7,
                            borderRadius: 40 / 2,
                            backgroundColor: '#EF6000',
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <TouchableOpacity activeOpacity={1}>



                                <Neomorph
                                    style={{
                                        shadowRadius: 11.5,
                                        borderRadius: 35 / 2,
                                        backgroundColor: '#CCDEFA',
                                        width: 35,
                                        height: 35,
                                    }}
                                >
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                                    <Ionicons name='play-forward-sharp' size={18} color="#EF6000" />
                                </View>
                                </Neomorph>



                        </TouchableOpacity>
                    </Neomorph>
                </Neomorph>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#CCDEFA',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',


    },
    contentContainerStyle: {
        //paddingTop: 60,
        paddingBottom: 100,
    },
    section: {
        flex: 1,
    },
    divider: {
        marginTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10

    },

    neomorph1: {
        shadowRadius: 6,
        borderRadius: 25,
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowColor: '#fbffff',
        backgroundColor: '#CCDEFA',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1
    },
    inputView: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    neomorphInput: {
        shadowRadius: 6,
        borderRadius: 25,
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowColor: '#fbffff',
        backgroundColor: '#CCDEFA',
        width: 300,
        height: 50,
        opacity: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20

    },
    UserContainer: {
        alignItems: 'center',
        marginBottom: 20
    },
    neomorphUserContainer: {
        shadowRadius: 10,
        borderRadius: 8,
        shadowOffset: {
            width: 7,
            height: 7
        },
        shadowColor: '#fbffff',
        backgroundColor: '#CCDEFA',
        width: 300,
        height: 90,
        opacity: 1,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userProfileneomorph: {
        shadowRadius: 6,
        borderRadius: 30,
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowColor: '#fbffff',
        backgroundColor: '#CCDEFA',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1
    }



});

export default ExampleShadow;
