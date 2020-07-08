import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center',  marginTop: 10, backgroundColor: this.props.bgcolor, borderRadius: 20  }}>
                <View style={{ ...styles.bgcard, backgroundColor:'blue',  justifyContent: 'flex-start', backgroundColor: this.props.color1, borderTopLeftRadius: 20, borderTopRightRadius: 20 , ...this.props.style  }}>
        <Text style={styles.text}>Now</Text>
                    <Image source={this.props.img} style={styles.img} />
                </View>
                <View style={{...styles.bgcard, backgroundColor: 'blue', zIndex: -1, elevation: -1 ,  justifyContent: "flex-end", backgroundColor: this.props.color2, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 , ...this.props.style  }}>
        <Text style={styles.text}>{this.props.data}°C </Text>
                </View>
           </View >
           

        )
    }
}
const styles = StyleSheet.create({
    bgcard: {
        width: 150,
        height: 150,
        alignItems: 'center'
    },
    img: {
        width: 100,
        height: 100,
        alignSelf: 'center', 
        marginTop: 30,
        zIndex: 99
    },
    text: {
        color: '#FF0000',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '900'
    },
     text2: {
        color: '#FF0000',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '900'
    }
})