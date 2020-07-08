import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}> Ứng dụng dự báo nhiệt độ sau 30 phút  </Text>
                <Image source={require('../assets/weather/sunny2.png')} style={styles.img} />
                <Text style={styles.temp_text}>30.22 °C </Text>
                <Text style={styles.city}>Hồ Chí Minh, Việt Nam</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
       
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333'
    },
    img: {
        width: 50,
        height: 50,
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