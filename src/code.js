import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,

} from 'react-native'

export default class App extends Component{
  render(){
    return(
      <ImageBackground source={require('./src/Common_1.jpg')} style={{width: '100%', height: '100%'}}>
        
        <ScrollView contentContainerStyle={styles.contentContainer}>
  
          <View style={styles.logoPart}>
            <Image 
              style={styles.img}
              source={require('./src/MazakinsLogo.png')}
            />
          </View>

          <View style={styles.pInfo}>
            <Image 
              style={styles.pInfoImage}
              source={require('./src/Parentinfo.png')}
            />
          </View>

          <View style={styles.twoTextView}>

            <View style={styles.emailButtonView1}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('./src/Name.png')}
                />
              </View>

              <View style={styles.emailButtonTextView1}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText}
                  placeholder={'First Name'}
                />

              </View>  
            </View>

            <View style={[styles.emailButtonView1, styles.left]}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('./src/Name.png')}
                />
              </View>

              <View style={styles.emailButtonTextView1}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText}
                  placeholder={'Surname'}
                />

              </View>  
            </View>

          </View>

          <View style={styles.emailButtonView}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('./src/Dobparent.png')}
                />
              </View>

              <View style={styles.emailButtonTextView3}>
                    <Text style={styles.threeText}>
                        Date of Birth
                    </Text>
               </View> 

              <View style={styles.emailButtonTextView2}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText1}
                  placeholder={'DD'}
                />

              </View>

               <View style={styles.emailButtonTextView2}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText1}
                  placeholder={'MM'}
                />

              </View>

               <View style={styles.emailButtonTextView2}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText1}
                  placeholder={'YYYY'}
                />

              </View>  
          </View>        

          <View style={styles.emailButtonView}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('./src/Email.png')}
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

          <View style={styles.emailButtonView}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('./src/Password.png')}
                />
              </View>

              <View style={styles.emailButtonTextView}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText}
                  placeholder={'Password'}
                />

              </View>  
          </View>

          <View style={styles.emailButtonView}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('./src/Password.png')}
                />
              </View>

              <View style={styles.emailButtonTextView}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText}
                  placeholder={'Confirm Password'}
                />

              </View>  
          </View>


                {/* chile   */}

          <View style={styles.pInfo2}>
            <Image 
              style={styles.pInfoImage}
              source={require('./src/Childinfo.png')}
            />
          </View>

          <View style={styles.twoTextView}>

            <View style={styles.emailButtonView1}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('./src/Name.png')}
                />
              </View>

              <View style={styles.emailButtonTextView1}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText}
                  placeholder={'First Name'}
                />

              </View>  
            </View>

            <View style={[styles.emailButtonView1, styles.left]}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('./src/Name.png')}
                />
              </View>

              <View style={styles.emailButtonTextView1}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText}
                  placeholder={'Last Name'}
                />

              </View>  
            </View>

          </View>

          <View style={styles.emailButtonView}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('./src/Gender.png')}
                />
              </View>

              <View style={styles.emailButtonTextView}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText}
                  placeholder={'Gendar'}
                />

              </View>  
          </View>
        

          <View style={styles.emailButtonView}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('./src/DobChild.png')}
                />
              </View>

              <View style={styles.emailButtonTextView3}>
                    <Text style={styles.threeText}>
                        Date of Birth
                    </Text>
               </View> 

              <View style={styles.emailButtonTextView2}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText1}
                  placeholder={'DD'}
                />

              </View>

               <View style={styles.emailButtonTextView2}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText1}
                  placeholder={'MM'}
                />

              </View>

               <View style={styles.emailButtonTextView2}>
                {/* <Text style={styles.emailButtonText}>
                  Email address
                </Text> */}
                <TextInput
                  style={styles.emailButtonText1}
                  placeholder={'YYYY'}
                />

              </View>  
          </View>        
       


        <View style={styles.sendButtonView}>
            <TouchableOpacity >
              <Image 
                style={styles.sendEmailIcon}
                source={require('./src/Signup11.png')}
              /> 
             </TouchableOpacity>
          </View>

          <View style={styles.resendButtonView}>

            <TouchableOpacity >
              <Image 
                style={styles.resendEmailIcon}
                source={require('./src/Alreadymember.png')}
              /> 
             </TouchableOpacity>

          </View>  

        </ScrollView>

            
        

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  
  contentContainer: {
    paddingVertical: 20
  },
  logoPart:{
    // justifyContent:'center',
     alignItems:'center',
    //backgroundColor:'blue',
    //height: 200,
  },
  img:{
    width: 320,
    height: 350,
    resizeMode: 'contain'
  },
  pInfo:{
    height:30,
    width:100,
    marginTop:5,
    marginLeft:32
    //backgroundColor:'blue',
    //borderRadius:30,
    },

    pInfo2:{
      height:30,
      width:100,
      marginTop:30,
      marginLeft:32
      //backgroundColor:'blue',
      //borderRadius:30,
      },
  pInfoImage:{
    height:30,
    width:100,
    borderRadius:30,
    ////
  },
  ///////////////sedha_wala/////////
  emailButtonView:{
    marginTop:10,
    height:50,
    backgroundColor:'white',
    width:350,
    alignSelf:'center',
    flexDirection:'row',
    borderRadius:30,
  },
  emailButtonView1:{
    marginTop:10,
    height:50,
    backgroundColor:'white',
    width:340,
    alignSelf:'center',
    flexDirection:'row',
    borderRadius:30,
  },
  emailButtonView1:{
    marginTop:10,
    height:50,
    backgroundColor:'white',
    width:170,
    alignSelf:'center',
    flexDirection:'row',
    borderRadius:30,
    marginLeft:7,
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
  emailButtonTextView2:{
    flex:2,
    //backgroundColor:'red',
    //alignItems:'center',
    justifyContent:'center',
    marginLeft:7,
    backgroundColor:'#e5f9fc',
    borderRadius:30,
    height:40,
    marginTop:5

  },
  emailButtonTextView3:{
    flex:3,
    //backgroundColor:'red',
    //alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
  },
  emailButtonTextView1:{
    flex:5,
    //backgroundColor:'red',
    //alignItems:'center',
    justifyContent:'center',
    marginLeft:30,
  },
  emailButtonText:{
    fontWeight:'bold',
    color:'#53adc3',
  },
  emailButtonText1:{
    fontWeight:'bold',
    color:'#53adc3',
    marginLeft:10
  },
  ///////////////////aik Line me 2/////
  twoTextView:{
    flexDirection:'row',
    marginLeft:25,
  },
  left:{
    marginLeft:7
  },
  ///
  threeText:{
    color:'#4fafc2',
    fontWeight:'bold',
    alignSelf:'center'

  },
  sendButtonView:{
    marginTop:10,
    height:65,
    backgroundColor:'white',
    width:250,
    alignSelf:'center',
    flexDirection:'row',
    borderRadius:30,
  },
  
  resendButtonView:{
    marginTop:10,
    height:50,
    backgroundColor:'white',
    width:320,
    alignSelf:'center',
    flexDirection:'row',
    borderRadius:30,
  },
  resendEmailIcon:{
    height:50,
    width:320,
  },
  sendEmailIcon:{
    height:65,
    width:250,

  },
})