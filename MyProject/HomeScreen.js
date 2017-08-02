import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet, TextInput, Image ,Animated,ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import WeatherScreen from './WeatherScreen';
import AccountScreen from './AccountScreen';
import FinancialMarket from './FinancialMarket';
import BookBestSeller from './BookBestSeller';
import PanResponder from './PanResponder';
import Switch from './Switch';
import Geolocation from './GeoLocation';
import TabBar from './TabBar';
import Calendar from'./Calendar'




class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
      

    return (
        <View>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png', static: true}}
          resizeMode='cover'
          style={styles.background}
        >
        </Image>
      <View style={styles.ChooseBox}>
          <View style={styles.ButtonBox}>
        <Text>Hello, Cool App!</Text>
        <Button
          onPress={() => navigate('Calendar')}
          title="Go to Calendar"
        />
        
        <Button
          onPress={() => navigate('Weather')}
          title="GO to Weather"
        />

        <Button
          onPress={() => navigate('Account')}
          title="Go to Account"
        />

        <Button
          onPress={() => navigate('FinancialMarket')}
          title="Go to FinancialMarket"
        />

        <Button
          onPress={() => navigate('BookBestSeller')}
          title="Go to BookBestSeller"
        />
        <Button
          onPress={() => navigate('PanResponder')}
          title="Go to PanResponder"
        />

        <Button
          onPress={() => navigate('Switch')}
          title="Go to Switch"
        />

        <Button
          onPress={() => navigate('Geolocation')}
          title="Go to Geolocation"
        />

        <Button
          onPress={() => navigate('TabBar')}
          title="Go to TabBar"
        />
      </View>   
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  background:{
        //flex:0,
      opacity: 0.3,
      flexDirection:'column',
      paddingTop: 200,
      alignItems: "center",
      //backgroundColor: "#FFF999"
  },
  ChooseBox: { flex: 0, 
    alignItems: "center", paddingTop: 50,backgroundColor: "#FFF555"},

    ButtonBox:{ flex: 0, 
    alignItems: "center", paddingBottom: 600,backgroundColor: "#FFF555"},

  

  
});



export default HomeScreen;