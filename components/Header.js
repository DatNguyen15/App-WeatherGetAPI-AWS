import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View>

                <Text></Text>
                <Text style={styles.text}> Weather App</Text>
                <Image source={require('../assets/weather/snow3.png')} style={styles.img} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#003399',
        
    },
    img: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginVertical: 10
    },
    temp_text: {
        
        fontSize: 38,
        fontWeight: '900',
        textAlign: 'center'
    },
    city: {
        fontSize: 24,
        color: '#777',
        textAlign: 'center'
    }

})