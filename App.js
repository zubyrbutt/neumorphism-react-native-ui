import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, StatusBar, Image, TouchableOpacityWithoutFeedback, TouchableOpacity } from 'react-native';
import { Shadow, Neomorph, NeomorphBlur } from 'react-native-neomorph-shadows';
import Ionicons from 'react-native-vector-icons/Ionicons'
import TypeWriterComponent from './src/Components/TypeWriterComponent';
import { Audio, Video } from 'expo-av';
import AudioData from './src/data/audioData'

const { width } = Dimensions.get("screen")

const Song = {
    id: '1',
    song: require('./src/assets/audio/mulk.mp3'),
};

const ExampleShadow = () => {
    const [shadowColor, setShadowColor] = useState(true)
    const [startTyping, setStartTyping] = useState(false)
    //for audio
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(null);
    const [position, setPosition] = useState(null);
    const [audioIndex, setAudioIndex] = useState(0);

    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
        console.log(status);
    };
    console.log("---------------Audio--------------------", AudioData[0].AudioFile)
    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }
        const { sound: newSound } = await Audio.Sound.createAsync(
            require('./src/assets/audio/mulk.mp3'),
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate
        );
        setSound(newSound);
    };

    useEffect(() => {
        playCurrentSong();
    }, []);

    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.pauseAsync();
        } else {
            await sound.playAsync();
        }
    };
    console.log(startTyping)
    return (
        <View style={styles.main}>
            <StatusBar hidden />
            <TypeWriterComponent startTyping={startTyping} />
         
            <View style={{ position: 'absolute', bottom: 10, left: 0, right: 0 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                    <View style={{ left: 10, }}>
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
                            <TouchableOpacity activeOpacity={1} onPress={() => { onPlayPausePress(), setStartTyping(!startTyping), setShadowColor(!shadowColor) }}>

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
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#CCDEFA',
       
    },
    textContainer: {
        alignSelf: 'center',
        width: width - 50,
        marginTop: width * 0.3,
        //backgroundColor: 'white'
    },
    textStyle: {
        fontSize: 25,
        // textShadowColor: 'rgba(0, 0, 0, 0.2)',
        // textShadowOffset: { width: -1, height: 1 },
        // textShadowRadius: 10,
        fontWeight: 'bold',
        color: '#788491'
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
