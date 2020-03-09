import React, {Component} from 'react';
import {StyleSheet, Text, View, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import codeOne from './screens/codeOne';
import codeTwo from './screens/codeTwo';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import MyProfile from './screens/MyProfile';
import ResetPassword from './screens/ResetPassword';
import ChangePassword from './screens/ChangePassword';
import Home from './screens/Home';
import ManageSub from './screens/ManageSub';
import MoreOptions from './screens/MoreOptions';
import PaymentOptions from './screens/PaymentOptions'
import ParentDashboard from './screens/ParentDashboard'
import Settings from './screens/Settings'
import TransactionHistory from './screens/TransactionHistory'
import Library from './screens/Library'
import Story from './screens/Story'
import BookMarks from './screens/BookMarks'
import StoryDetails from './screens/StoryDetails'
import Splash from './screens/Splash'

const RootStack = createStackNavigator(
  {
    codeOne: {
      screen: codeOne
    },
    codeTwo:{
      screen: codeTwo
    },
    Login:{
      screen: Login
    },
    SignUp:{
      screen: SignUp
    },
    MyProfile:{
      screen: MyProfile
    },
    ResetPassword:{
      screen: ResetPassword
    },
    ChangePassword:{
      screen: ChangePassword
    },
    Home:{
      screen: Home 
    },
    ManageSub:{
      screen: ManageSub
    },
    MoreOptions:{
      screen: MoreOptions
    },
    PaymentOptions:{
      screen: PaymentOptions
    },
    ParentDashboard:{
      screen: ParentDashboard
    },
    Settings:{
      screen: Settings
    },
    TransactionHistory: {
      screen: TransactionHistory
    },
    Library:{
      screen: Library
    },
    Story:{
      screen: Story
    },
    BookMarks:{
      screen: BookMarks
    },
    StoryDetails:{
      screen: StoryDetails
    },
    Splash:{
      screen: Splash
    }
  },
  {
    initialRouteName: 'codeOne'
  }
);

class App extends React.Component {
  render(){
    return <RootStack />
  }
}

export default createAppContainer(RootStack);
