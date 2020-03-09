import React, {Component} from 'react';
import {
   View,
   Text, 
   ImageBackground, 
   StyleSheet, 
   Image,
   TextInput,
   TouchableOpacity,
   ScrollView,
   TouchableHighlight,
   Modal
   } from 'react-native';
   import Conformation from '../modal/Confirmation'

export default class ResetPassword extends Component{

  constructor(props){
    super(props)
    this.state = {
        isModalVisible:false,
        choosenData: '',
    }
}

  static navigationOptions ={
    header:null
} 
changeModalVisibility = (bool) => {
  this.setState({ isModalVisible: bool });
}

setData = (data) => {
  this.setState({choosenData: data})
}
  render(){
    return(
     
        
        <ImageBackground source={require('../src/Common_1.jpg')} style={{width: '100%', height: '100%'}}>

          <View style={styles.forgotten}>
            <View style={styles.forgottenBackView}>
              <TouchableOpacity
              onPress={() => this.props.navigation.push('Login')}
              >
              <Image 
                style={styles.forgottenIcon}
                source={require('../src/Back.png')}
              />
              </TouchableOpacity>
            </View>

            

            <View style={styles.forgottenTextView}>
              <Text style={styles.forgottenText}>
                Forgotten Password
              </Text>
            </View>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            >

          <View style={styles.forgottenMainIconView}>
            <Image 
                style={styles.forgottenEmailIcon}
                source={require('../src/Forgotmail.png')}
            />
          </View>

          <View style={styles.forgetTextView}>
              
              <Text style={styles.forgetText1}>Forgot Your Password?</Text>
            <View style={styles.forgetText2View}>
              <Text style={styles.forgetText2}>Enter your email below and we'll send</Text>
          
              <Text style={styles.forgetText2}>you a link to reset your password</Text>
            </View>  
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

          <View style={styles.sendButtonView}>
            <TouchableHighlight 
            onPress={() => this.changeModalVisibility(true) }
            >
              <Image 
                style={styles.sendEmailIcon}
                source={require('../src/Reset.png')}
              /> 
             </TouchableHighlight>
             <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}
               animationType='fade'>
                    <Conformation changeModalVisibility={this.changeModalVisibility } setData={this.setData} />
               </Modal>
          </View>

          <View style={styles.resendButtonView}>

            <TouchableOpacity >
              <Image 
                style={styles.resendEmailIcon}
                source={require('../src/Resend.png')}
              /> 
             </TouchableOpacity>

          </View>     

          </ScrollView>

          </ImageBackground>

          
    
    );
  }
}

const styles = StyleSheet.create({
  forgotten:{
    height:80,
    backgroundColor:'white',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center',
    //flex:1,
    flexDirection:'row' 
  },
  forgottenBackView:{
    //backgroundColor:'blue',
    flex:1,
    alignItems:'center'
  },
  forgottenTextView:{
    //backgroundColor:'red',  
    flex:4,

  },  
  forgottenText:{
    fontSize:25,
    fontWeight:'bold',
    color:'#268ea6',
    marginLeft:20,
  },
  forgottenIcon:{
    height:25,
    width:25
  },
  forgottenEmailIcon:{
    height:75,
    width:105
  },
  forgottenMainIconView:{
    //backgroundColor:'blue',
    alignItems:'center',
    marginTop:60,
  },
  forgetTextView:{
    alignItems:'center',
    marginTop:30
  },
  forgetText1:{
    fontSize:25,
    fontWeight:'bold',
    color:'#258fa6'
  },
  forgetText2:{
    fontSize:17,
    color:'#258fa6',
  },
  forgetText2View:{
    marginTop:20,
    alignItems:'center'
  },
  emailButtonView:{
    marginTop:30,
    height:50,
    backgroundColor:'white',
    width:350,
    alignSelf:'center',
    flexDirection:'row',
    borderRadius:30,
  },
  sendButtonView:{
    marginTop:10,
    height:50,
    backgroundColor:'white',
    width:350,
    alignSelf:'center',
    flexDirection:'row',
    borderRadius:30,
  },
  resendButtonView:{
    marginTop:80,
    height:50,
    backgroundColor:'white',
    width:220,
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
  emailButtonTextView:{
    flex:5,
    //backgroundColor:'red',
    //alignItems:'center',
    justifyContent:'center',
    marginLeft:90,

  },
  emailButtonIcon:{
    height:35,
    width:35
  },
  emailButtonText:{
    fontWeight:'bold',
    color:'#53adc3',
  },
  sendEmailIcon:{
    height:50,
    width:350,

  },
  resendEmailIcon:{
    height:50,
    width:220,
  }
})


