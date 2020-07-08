import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      main: {
      }
    }
    this._getWeatherReport = this._getWeatherReport.bind(this);
  }
  async _getWeatherReport() {
    const response = await fetch('https://samples.openweathermap.org/data/2.5/weather?q=London&appid=439d4b804bc8187953eb36d2a8c26a02')
    const data = await response.json();
        this.setState({
          main: {
           humidity: data.main.humidity,
           temp: data.main.temp - 250.1
        }
      })
  }
  async componentDidMount() {
    await this._getWeatherReport();
   console.log(this.state.main)
  }




    render() {
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              <Header />
              <Content data={this.state.main.temp} data1={this.state.main.humidity}  />
              <Footer  />
              <Footer />
            </View>
          </SafeAreaView>
        )
    }
 }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20
    }
  })