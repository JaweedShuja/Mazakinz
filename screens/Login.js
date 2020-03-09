import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, TextInput, Button, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Login extends Component{  
  static navigationOptions ={
    header:null
} 
  render(){
    return(

      <ImageBackground source={require('../src/Common_1.jpg')} style={{width: '100%', height: '100%'}}>

          <ScrollView
          showsVerticalScrollIndicator={false}
          >

           <View style={styles.logoPart}>
              <Image 
                style={styles.img}
                source={require('../src/MazakinsLogo.png')}
              />
          </View>

          <View style={styles.emailButtonView}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('../src/Email.png')}
                />
              </View>

              <View style={styles.emailButtonTextView}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText}
                  placeholder={'Email address'}
                />

              </View>  
          </View>

          <View style={[styles.emailButtonView,{marginTop:8}]}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('../src/Password.png')}
                />
              </View>

              <View style={styles.emailButtonTextView}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  secureTextEntry={true}
                  style={styles.emailButtonText}
                  placeholder={'Password'}
                />

              </View>  
              
              
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.push('ResetPassword')}
          >
                <Text style={{fontWeight:'bold', marginLeft:40,marginTop:10, color:'#399eb3', textDecorationLine: 'underline'}}>
                    Forgot Password
                </Text>
              </TouchableOpacity>


           <View style={[styles.buttonPart, {marginTop:90, marginBottom:30}]}>
            <TouchableOpacity
            onPress={() => this.props.navigation.push('Home')}
             style={styles.btn} >
              
              <Image
                style={styles.btn}
                source={require('../src/Signin.png')}
              />

              {/* <Text style={styles.btnText1}>Sign in</Text> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2} >

                  <Image
                  style={styles.btn2}
                    source={require('../src/Fingerprint.png')}
                  />

              {/* <View style={styles.contentView}>
                <Text style={styles.content}><Text style={styles.username}>Sign in with</Text> Fingerprint</Text>
              </View> */}
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn3,{marginTop:60,}]}
            onPress={() => this.props.navigation.push("SignUp")} >
              {/* <View style={styles.contentView}>
                <Text style={styles.content}><Text style={styles.username}>New User?</Text> Signup</Text>
              </View> */}

              <Image
                style={styles.btn3}
                source={require('../src/Singup.png')}
              />
            </TouchableOpacity>
          </View>

          </ScrollView>
     
  </ImageBackground>
     
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ace9f7',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    zIndex:0
  },
  textfields:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    width:300,

  },
  textfieldsIcon:{
    flex:1
  },
  icon:{
    height:35,
    width:35,
    
  },
  textfieldsInput:{
    flex:4
  },  
  contentView: {
    paddingLeft: 10,
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  username: {
    fontSize:20,
    color:'#51aec2',
  },
  content: {
    fontSize:20,
    color:'#ff502b',
  }, 
  txt1:{
    flex:1,
    flexDirection:'row',
    
    marginLeft:20,
  },
  txt2:{
    flex:1,
    justifyContent:'center',
    //alignItems:'center',
    marginLeft:20
  },
  txt3:{
    flex:1,
    justifyContent:'center',
    //alignItems:'center',
  },
  btnText1:{
    fontSize:20,
    color:'white'
  },
  btnText2:{
    fontSize:20,
    color:'#51aec2',
  },  
  textBox:{
    marginTop:5,
    width:300,
    backgroundColor:'white',
    fontSize:18,
    color:'#52aec2',
    borderRadius:30,
    textAlign:'center'
  },
  zero:{ 
    position: 'absolute',
   zIndex: 1 
  },
  one:{ 
    position: 'absolute',
    zIndex: 0,
    justifyContent:'center',
    alignItems:'center',
    flex:1,
   }
  ,
  logoPart:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  loginPart:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonPart:{
    flex:1,
    marginLeft:55
  },
  img:{
      
    width: 320,
    height: 280,
    resizeMode: 'contain'
  },
  img2:{
    
    
    width: 850,
    height: 550,
    resizeMode: 'contain'
  },
  btn:{
    width:300,
    height:50,
    // backgroundColor:'#ff502b',
    borderRadius:30,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center',
    marginTop:5
    
  },
  btn2:{
    width:300,
    height:56,
    // backgroundColor:'white',
    borderRadius:30,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center',
    marginTop:5
    
  },
  btn3:{
    width:200,
    height:50,
    backgroundColor:'white',
    borderRadius:30,
    alignItems:'center',
    //alignSelf:'center',
    justifyContent:'center',
    marginTop:5,
    marginLeft:40,
    // marginTop:30,
  },
  emailButtonView:{
    height:50,
    backgroundColor:'white',
    width:350,
    alignSelf:'center',
    flexDirection:'row',
    borderRadius:30,
  },
  emailButtonIconView:{
    flex:1,
    //backgroundColor:'blue',
    //alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
  },
  emailButtonIcon:{
    height:35,
    width:35
  },
  emailButtonTextView:{
    flex:5,
    //backgroundColor:'red',
    //alignItems:'center',
    justifyContent:'center',
    marginLeft:90,
  },
  emailButtonText:{
    fontWeight:'bold',
    color:'#53adc3',
  },
})
