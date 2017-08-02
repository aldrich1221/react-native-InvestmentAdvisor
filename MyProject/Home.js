import HomeScreen from './HomeScreen'
import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import WeatherScreen from './WeatherScreen';
import AccountScreen from './AccountScreen';
import FinancialMarket from './FinancialMarket';
import BookBestSeller from './BookBestSeller';
import PanResponder from './PanResponder';
import Switch from './Switch';
import GEOlocation from './GeoLocation';
import TabBar from './TabBar';
import Calendar from './Calendar';
const Home = StackNavigator({
  Home: { screen: HomeScreen },
  Weather: { screen: WeatherScreen },
  Account:{screen: AccountScreen},
  FinancialMarket:{screen: FinancialMarket},
  BookBestSeller:{screen: BookBestSeller},
  PanResponder:{screen: PanResponder},
  Switch:{screen: Switch},
  Geolocation:{screen:GEOlocation},
  TabBar:{screen:TabBar},
Calendar:{screen:Calendar}

});

export default Home;