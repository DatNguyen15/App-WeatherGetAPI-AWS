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
    constructor(props) {
        super(props);
        this.state = {
          text: '',
        };
      }
    
      handleChangeText = text => {
        this.setState({ text });
      };
    
      handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;
    
        if (!text) return;
    
        onSubmit (text);
        this.setState({ text: '' });
      };
    
      render() {
        const { placeholder } = this.props;
        const { text } = this.state;
    
        return (
          <View style={styles.container}>
            <TextInput
              autoCorrect={false}
              value={text}
              placeholder={placeholder}
              placeholderTextColor="black"
              underlineColorAndroid="transparent"
              textAlign="center"
              style={styles.textInput}
              clearButtonMode="always"
              onChangeText={this.handleChangeText}
              onSubmitEditing={this.handleSubmitEditing}
            />
            <Button  type="submit"title='ghhhhg'></Button>
          </View>
        );
      }
    }
    
    Footer.propTypes = {
      onSubmit: PropTypes.func.isRequired,
      placeholder: PropTypes.string,
    };
    
    Footer.defaultProps = {
      placeholder: '',
    };
   
    const styles = StyleSheet.create({
      container: {
        height: 60,
        marginTop: 20,
        backgroundColor: 'lightgreen',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      textInput: {
        flex: 1,
        fontSize: 20,
        color: '#222',
      }
    });