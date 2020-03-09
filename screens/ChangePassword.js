import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,TextInput, ImageBackground} from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';

class ChangePassword extends Component{
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

          <ImageBackground source={require('../src/Common_1.jpg')} style={{width: '100%', height: '100%'}}>
        
      

            <View style={styles.container}>
                <View style={styles.titleView}>

                    <TouchableOpacity 
                    onPress={() => this.props.navigation.push('Settings')}
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
                            Change Password
                            
                        </Text>
                    </View>
                </View>


                <ScrollView contentContainerStyle={styles.contentContainer}>

              <View style={styles.txtForgotContainerView}>

              <View style={styles.txtForgotContainer}>

               <View style={styles.txtForgotContainer1}>
                <Image
                style={{height:30, width:30}}
                source={require('../src/Password.png')}


                />
               </View>
               <View style={styles.txtForgotContainer2}>
                 <TextInput
                 secureTextEntry={true}
                    placeholder="Old Password"
                    style={{fontSize:16,}}
                 />
               </View>
               <View style={styles.txtForgotContainer3}>
               <Image
                style={{height:30, width:30}}
                source={require('../src/Eye.png')}


                />
               </View>

              </View>

              <View style={styles.txtForgotContainer}>

              <View style={styles.txtForgotContainer1}>
                <Image
                style={{height:30, width:30}}
                source={require('../src/Password.png')}


                />
               </View>
               <View style={styles.txtForgotContainer2}>
                 <TextInput
                 secureTextEntry={true}
                    placeholder="New Password"
                    style={{fontSize:16,}}
                 />
               </View>
               <View style={styles.txtForgotContainer3}>
               <Image
                style={{height:30, width:30}}
                source={require('../src/Eye.png')}


                />
               </View>

            
              </View>


              <View style={styles.txtForgotContainer}>

              <View style={styles.txtForgotContainer1}>
                <Image
                style={{height:30, width:30}}
                source={require('../src/Password.png')}


                />
               </View>
               <View style={styles.txtForgotContainer2}>
                 <TextInput
                 secureTextEntry={true}
                    placeholder="Confirm Password"
                    style={{fontSize:16,}}
                 />
               </View>
               <View style={styles.txtForgotContainer3}>
               <Image
                style={{height:30, width:30}}
                source={require('../src/Eye.png')}


                />
               </View>

              </View>
              </View>


              <TouchableOpacity
              style={{marginTop:40,}}
              >
            <View style={styles.btnViewView}>
                <Image
                style={styles.btnViewView}
                source={require('../src/SaveChane.png')}

                />
            </View>

              </TouchableOpacity>

                </ScrollView>
            </View>

            </ImageBackground>
        );
    }
    onPress2 = () => {
      this.setState({ switchOn2: !this.state.switchOn2 });
    }
    onPress3 = () => {
      this.setState({ switchOn3: !this.state.switchOn3 });
    }
}



export default ChangePassword;

const styles = StyleSheet.create({
  txtForgotContainer:{
    flex:1,
    flexDirection:'row',
    height:50,
    backgroundColor:'white',
    marginLeft:20,
    marginRight:20,
    borderRadius:30,
    marginTop:10,
    
    
  },
  btnViewView:{
    height:50,
    width:200,
    backgroundColor:'white',
    alignSelf:'center',
    //marginTop:40,
    borderRadius:30,
  },
  txtForgotContainerView:{
    marginTop:50,
  },  
  txtForgotContainer1:{
    flex:1,
    //backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
  },  
  txtForgotContainer2:{
    flex:3,
    //backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
  },
  txtForgotContainer3:{
    flex:1,
    //backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
  },
    container:{
        //backgroundColor:'#e8f8f9',
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


