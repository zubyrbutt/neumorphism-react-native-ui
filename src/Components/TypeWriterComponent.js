import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import TypeWriter from 'react-native-typewriter'

const { width } = Dimensions.get("screen")

const TypeWriterComponent = (props) => {
    console.log(props)
    return (
        <View style={styles.textContainer}>

            {/* <TypeWriter maxDelay={100} style={styles.textStyle1} typing={props.startTyping ? -1 : 1}>
                تَبَـٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ
                </TypeWriter> */}
            <View style={{ marginVertical: 5 }} />
            <TypeWriter maxDelay={150} style={styles.textStyle2} typing={props.startTyping ? -1 : 1}>
                Blessed is He in whose hand is dominion, and He is over all things competent
                </TypeWriter>
        </View>
    )
}

export default TypeWriterComponent

const styles = StyleSheet.create({
    textContainer: {
        alignSelf: 'center',
        width: width - 50,
        marginTop: width * 0.3,
        //backgroundColor: 'white'
    },
    textStyle1: {
        fontSize: 25,
        textShadowColor: 'rgba(255, 250, 250, 0.2)',
        textShadowOffset: { width: -1, height: 5 },
        textShadowRadius: 10,
        fontWeight: 'bold',
        color: '#788491'
    },
    textStyle2: {
        fontSize: 20,
        textShadowColor: 'rgba(255, 250, 250, 0.2)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontWeight: 'bold',
        color: '#788491'
    },
})
