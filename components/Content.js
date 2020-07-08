import React, { Component } from 'react'
import { StyleSheet, Text, View, Image,Platform } from 'react-native'
import Card from './parts/Card';
import Card1 from './parts/Card1';

export default class Content extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Card img={require("../assets/weather/rainy3.png")} bgcolor="bluelight" color1="bluelight" color2="bluelight" style={{borderTopLeftRadius: 70 }} data={this.props.data} />
                
                <Card1 img={require("../assets/weather/sunny2.png")} bgcolor="bluelight" color1="bluelight" color2="bluelight" style={{borderBottomRightRadius: 70 }} data1={this.props.data1} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-around",
        borderRadius: 20
    }
})
