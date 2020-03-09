React Navigation v3

step 1
npm install react-navigation

npm install react-native-gesture-handler react-native-reanimated

step 2
(Modification on MainActivity.java)

package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}


step3 
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

class ProfileActivity extends React.Component {
    static navigationOptions = {
        title: "Profile",
        headerStyle: {backgroundColor: "#73C6B6"}};
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Profile Activity
                </Text>
                <Button title="Go to Home"onPress={() => this.props.navigation.navigate("Home")}/>
                <Text style={styles.headerText}>
                    Create a New Profile Screen
                </Text>
                <Button title="Go to new Profile"onPress={() => this.props.navigation.push("Profile")}/>
                <Text style={styles.headerText}>
                     Go Back 
                </Text>
                <Button title="Go Back"onPress={() => this.props.navigation.goBack()}/>

               
        </View>);}}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"}
    });
    
    export default ProfileActivity;

step 4

import React, {Component} from 'react';
import {Platform,StyleSheet,Text,View,Button} from 'react-native';

class HomeActivity extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {backgroundColor: '#03A9F4',},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
    };
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.headerText} >
                Home Activity
            </Text>
            <Button title="Go to Profile Activity"onPress={() => this.props.navigation.navigate('Profile')}/>
        </View>
        );}
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        headerText: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            fontWeight: 'bold'},
        });
        
export default HomeActivity;

step 5

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import HomeActivity from './components/HomeActivity';
import ProfileActivity from './components/ProfileActivity';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeActivity
    },
    Profile: {
      screen: ProfileActivity
    }
  },
  {
    initialRouteName: 'Home'
  }

);

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default createAppContainer(RootStack);


