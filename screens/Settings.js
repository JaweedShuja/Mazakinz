import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';

class Settings extends Component{
  static navigationOptions ={
    header:null
} 
    static navigationOptions = {
       header:null
        
    };

    constructor(props) {
      super(props);
      this.state = {
        switchOn1: false,
        switchOn2: false,
        switchOn4: false
      };
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleView}>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.push('MoreOptions')}
                     style={styles.titleBackView}>

                    <View style={styles.titleBackView}>
                        <Image 
                        style={styles.titleBack}
                        source={require('../src/Back.png')}
                        />
                    </View>
                    </TouchableOpacity>

                    <View style={styles.titleTextView}>
                        <Text style={styles.titleText}>
                            Account Settings
                            
                        </Text>
                    </View>
                </View>

                <ScrollView contentContainerStyle={styles.contentContainer}>
    
                <Text style={styles.txt1}>
                    PROFILE SETTINGS
                </Text>

              <View style={styles.tabContainer}>

                <TouchableOpacity
                //onPress={() => this.props.navigation.push('MyProfile')}
                 style={styles.settingTab}>

                  <View  style={styles.settingTab1}>
                    <Text style={styles.settingTabText}>
                      Edit Profile
                    </Text>
                  </View>

                  <View style={styles.settingTab2}>

                  </View>

                  </TouchableOpacity>   

                   <TouchableOpacity
                   onPress={() => this.props.navigation.push('ChangePassword')}
                    style={styles.settingTab}>

                   <View  style={styles.settingTab1}>
                    <Text style={styles.settingTabText}>
                    Change Password

                    </Text>
                  </View>

                  <View style={styles.settingTab2}>

                  </View>
                  </TouchableOpacity> 

                  <View style={styles.settingTab}>

                  <View  style={styles.settingTab1}>
                    <Text style={styles.settingTabText}>
                      Send Push notifications
                    </Text>
                  </View>

                  <View style={styles.settingTab2}>
                  <SwitchToggle
          containerStyle={{
           // marginTop: 16,
            width: 50,
            height: 25,
            borderRadius: 25,
            backgroundColor: '#ccc',
            padding: 5,
          }}
          circleStyle={{
            width: 20,
            height: 20,
            borderRadius: 19,
            backgroundColor: 'green', // rgb(102,134,205)
          }}
          switchOn={this.state.switchOn2}
          onPress={this.onPress3}
          circleColorOff='white'
          circleColorOn='red'
          duration={500}
        />
                  </View>
                  </View>   

                   <View style={styles.settingTab}>
                   <View  style={styles.settingTab1}>
                    <Text style={styles.settingTabText}>
                      Refresh automatically
                    </Text>
                  </View>

                  <View style={styles.settingTab2}>
                  <SwitchToggle
          containerStyle={{
           // marginTop: 16,
            width: 50,
            height: 25,
            borderRadius: 25,
            backgroundColor: '#ccc',
            padding: 5,
          }}
          circleStyle={{
            width: 20,
            height: 20,
            borderRadius: 19,
            backgroundColor: 'green', // rgb(102,134,205)
          }}
          switchOn={this.state.switchOn2}
          onPress={this.onPress2}
          circleColorOff='white'
          circleColorOn='red'
          duration={500}
        />
                  </View>
                  </View>   
                  <TouchableOpacity
                  onPress={() => this.props.navigation.push('ManageSub')}
                   style={styles.settingTab}>
                  <View  style={styles.settingTab1}>
                    <Text style={styles.settingTabText}>
                      Manage Subscription
                    </Text>
                  </View>

                  <View style={styles.settingTab2}>
                      <Text style={{fontSize:40, fontWeight:'bold', color:'#248fa5'}}>
                        >
                      </Text>
                  </View>
                  </TouchableOpacity>   
                  </View>

                  <Text style={styles.txt1}>
                    SUPPORT
                </Text>

              <View style={styles.tabContainer}>

                <View style={styles.settingTab}>

                  <View  style={styles.settingTab1}>
                    <Text style={styles.settingTabText}>
                      About Mazakins
                    </Text>
                  </View>

                  <View style={styles.settingTab2}>

                  </View>

                  </View>   

                   <View style={styles.settingTab}>

                   <View  style={styles.settingTab1}>
                    <Text style={styles.settingTabText}>
                    Help & Support

                    </Text>
                  </View>

                  <View style={styles.settingTab2}>

                  </View>
                  </View> 

                  <View style={styles.settingTab}>

                  <View  style={styles.settingTab1}>
                    <Text style={styles.settingTabText}>
                      Privacy Policy
                    </Text>
                  </View>

                  <View style={styles.settingTab2}>

                  </View>
                  </View>   

                   
                   
                  </View>

                  <View style={styles.btnViewContainer}>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.push('Login')}
                    >

                      <View style={styles.btnView}>

                        <Image
                        style={styles.btnView}
                        source={require('../src/Logout.png')}

                        />

                      </View>


                    </TouchableOpacity>

                  </View>
                </ScrollView>
            </View>
        );
    }
    onPress2 = () => {
      this.setState({ switchOn2: !this.state.switchOn2 });
    }
    onPress3 = () => {
      this.setState({ switchOn3: !this.state.switchOn3 });
    }
}



export default Settings;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e8f8f9',
        flex:1,
    },
    titleView:{
        height:70,
        backgroundColor:'white',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        flexDirection:'row'
    },
    titleBackView:{
        //backgroundColor:'blue',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    titleBack:{
        height:25,
        width:25,
    },
    titleTextView:{
        //backgroundColor:'green',
        flex:4,
        justifyContent:'center',
    },
    titleText:{
        fontSize:25,
        fontWeight:'bold',
        color:'#248fa5',
        marginLeft:40,
    },
    txt1:{
        color:'#248fa5',
        marginTop:30,
        fontWeight:'bold',
        marginLeft:30,
        
    },
    subsTabViewMain:{
        marginTop:10,
        paddingLeft:25,
        paddingRight:25,
    },
    subsTabView:{
        height:100,
        backgroundColor:'white',
        borderRadius:25,
        flexDirection:'row',
    },
    subsTabViewText:{
        flex:1,
        //backgroundColor:'blue'
        justifyContent:'center',
    },
    subsTabViewPrice:{
        flex:1,
        //backgroundColor:'green'
        //justifyContent:'center'
    },
    subsTabViewPrice1:{
        fontSize:22,
        fontWeight:'bold',
        color:'#4ffd1c',
        marginLeft:80,
        marginTop:30,
    },  
    subsTabViewText1:{
        fontSize:20,
        fontWeight:'bold',
        color:'#268ea6',
        marginLeft:25,
    },
    subsTabViewText2:{
        fontWeight:'bold',
        color:'#89afb9',
        marginTop:15,
        marginLeft:25,
    },
    lastPartView:{
        height:180,
        //backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'

    },
    lastPartViewBtn:{
        height:50,
        width:250,
        borderRadius:30,
    },
    lastPartViewText:{
        fontWeight:'bold',
        marginTop:20,
        color:'#268ea6',
    },
    settingTab:{
      height:50,
      backgroundColor:'white',
      marginTop:2,
      flex:1,
      flexDirection:'row'
    },
    settingTab1:{
      //backgroundColor:'blue',
      flex:3,
      justifyContent:'center',
    },
    settingTab2:{
      //backgroundColor:'red',
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    settingTabText:{
      fontSize:18,
      marginLeft:20,
      fontWeight:'bold',
      color:'#248fa5',

    },
    tabContainer:{
      marginTop:20,
    },
    btnViewContainer:{
      height:120,
      //backgroundColor:'blue',
      justifyContent:'center',
      alignItems:'center',

    },
    btnView:{
      height:50,
      width:250,
      backgroundColor:'white',
      borderRadius:30,
    }  
})


