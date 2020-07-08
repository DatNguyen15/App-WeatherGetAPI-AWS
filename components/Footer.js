import React, { Component } from 'react'
import { StyleSheet,
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  StatusBar, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';

export default class Footer extends Component {
  render() {
      return (
          <View>

              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text style={styles.text}> Created By @DATNGUYEN</Text>
          </View>
      )
  }
}
const styles = StyleSheet.create({
  text: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#000000',
      
  },
})