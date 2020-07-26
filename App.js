import React from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput, Image} from 'react-native';
import {Shadow, Neomorph, NeomorphBlur} from 'react-native-neomorph-shadows';
import MaterialIcons from 'react-native-vector-icons/Feather'
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import  FontAwesome from 'react-native-vector-icons/FontAwesome'

const ExampleShadow = () => {
    return (
        <View style={styles.main}>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.section}>
                    <View style={styles.header}>
                        <Neomorph style={styles.neomorph1}>
                            <MaterialIcons name='menu' size={20} color='#91A1BD'/>
                        </Neomorph>
                        <Text style={{color: '#91A1BD'}}>Neumorphism</Text>
                        <Neomorph style={styles.neomorph1}>
                            <FontAwesome name='heart' size={20} color='#91A1BD'/>
                        </Neomorph>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.inputView}>
                        <Neomorph style={styles.neomorphInput}>
                            <TextInput placeholder='search' />
                            <MaterialIcons name='search' size={20} color='#91A1BD'/>
                        </Neomorph>
                    </View>

                    <View style={styles.divider}></View>
                    <View style={styles.divider}></View>

                    <View style={styles.UserContainer}>
                        <Neomorph style={styles.neomorphUserContainer}>
                            <Neomorph style={styles.userProfileneomorph}>
                                <Image source={require('./src/assets/images/image.jpg')} style={{width:55,height:55, borderRadius: 40}} />
                            </Neomorph>
                            <View style={{left:20}}>
                                <Text style={{color: '#91A1BD', fontWeight: 'bold'}}>Muhammad zubair</Text>
                                <Text style={{color: '#91A1BD'}}>+923357604243</Text>
                            </View>
                            <View style={{left: 60}}>
                                <MaterialCommunityIcons name='dots-vertical' size={20} color='#91A1BD'/>
                            </View>
                        </Neomorph>
                    </View>

                    <View style={styles.UserContainer}>
                        <Neomorph style={styles.neomorphUserContainer}>
                            <Neomorph style={styles.userProfileneomorph}>
                                <Image source={require('./src/assets/images/image2.jpg')} style={{width:55,height:55, borderRadius: 40}} />
                            </Neomorph>
                            <View style={{left:20}}>
                                <Text style={{color: '#91A1BD', fontWeight: 'bold'}}>Muhammad zubair</Text>
                                <Text style={{color: '#91A1BD'}}>+923357604243</Text>
                            </View>
                            <View style={{left: 60}}>
                                <MaterialCommunityIcons name='dots-vertical' size={20} color='#91A1BD'/>
                            </View>
                        </Neomorph>
                    </View>


                    <View style={styles.UserContainer}>
                        <Neomorph style={styles.neomorphUserContainer}>
                            <Neomorph style={styles.userProfileneomorph}>
                                <Image source={require('./src/assets/images/image3.jpg')} style={{width:55,height:55, borderRadius: 40}} />
                            </Neomorph>
                            <View style={{left:20}}>
                                <Text style={{color: '#91A1BD', fontWeight: 'bold'}}>Muhammad zubair</Text>
                                <Text style={{color: '#91A1BD'}}>+923357604243</Text>
                            </View>
                            <View style={{left: 60}}>
                                <MaterialCommunityIcons name='dots-vertical' size={20} color='#91A1BD'/>
                            </View>
                        </Neomorph>
                    </View>


                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#CCDEFA',
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
        paddingHorizontal:20

    },
    UserContainer:{
        alignItems: 'center',
        marginBottom: 20
    },
    neomorphUserContainer:{
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
        paddingHorizontal:20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userProfileneomorph:{
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
