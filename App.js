import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Image } from 'react-native'
import Header from './components/Header';
import Content from './components/Content';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import Footer from './components/Footer';


export default class App extends Component {
  constructor(props) {// hàm khởi tạo component
    super(props)
    this.state = {
      
    }
    this._getWeatherReport = this._getWeatherReport.bind(this);
  }
  //khai báo 1 hàm bất đồng bộ(biến thành Promise)
  async _getWeatherReport() {
    const response = await fetch('http://18.220.240.188:5000/iot')
    const data = await response.json();
        this.setState({
        
           CHuminity: data.CurrentHumidity,
           temp: data.CurrentTemp,
           nexttemp: data.next
        
      })
  }
  // hàm lấy dữ liệu từ server để reder  dữ liệu ra
  async componentDidMount() {
    await this._getWeatherReport();
   console.log(this.state)
  }
//hàm render để hiển thị ra màn hình
    render() {
        return (
      
          <SafeAreaView style={{ flex: 1 }}>
            
            <View style={styles.container}>
              <Header />
              <Content data={this.state.temp} data1={this.state.nexttemp}  />
              <Footer/>
            </View>
          </SafeAreaView>
        )
    }
 }
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#00FFFF"
  }
});