import React, {Component} from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  ImageBackground, 
  Image, 
  ScrollView, 
  TextInput, 
  TouchableOpacity} from 'react-native';

export default class MyProfile extends Component{
  static navigationOptions ={
    header:null
} 
  render(){
    return(
      
        <ImageBackground source={require('../src/Common_1.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={styles.profile}>
              <View style={styles.profiletxtView}>
                <Text style={styles.profiletxt}>
                  My Profile
                </Text>
              </View>
              
                <View style={styles.profileIconView}>
                <Image 
                  style={styles.profileIcon}
                    source={require('../src/Addaccount.png')}
                  />
              </View>
          </View> 


          <View style={{flex:6}}>

          <ScrollView contentContainerStyle={styles.contentContainer}>

              <View style={styles.pInfo}>
                <Image 
                  style={styles.pInfoImage}
                  source={require('../src/Parentinfo.png')}
                />
              </View> 

              <View style={styles.twoTextView}>

            <View style={styles.emailButtonView1}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('../src/Name.png')}
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
                  source={require('../src/Name.png')}
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
                  source={require('../src/Dobparent.png')}
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

              <View style={styles.imageNameContainer}>

                    <View style={styles.imageContainer}>
                        {/* <Image
                          source={require('./src/ProfilePic.jpg')}
                          style={styles.editImage}
                        /> */}
                     </View>
                    <Image
                      source={require('../src/Edit.png')}
                      style={styles.editImageIconView}
                    />

                    <Text style={styles.editImageText}>
                        Andrea Jhonsan
                    </Text>

                   </View> 

              <View style={styles.pInfo2}>
                <Image 
                  style={styles.pInfoImage}
                  source={require('../src/Childinfo.png')}
                />
              </View>

          <View style={styles.twoTextView}>

            <View style={styles.emailButtonView1}>
              <View style={styles.emailButtonIconView}>
                <Image 
                  style={styles.emailButtonIcon}
                  source={require('../src/Name.png')}
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
                  source={require('../src/Name.png')}
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
                  source={require('../src/Gender.png')}
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
                  source={require('../src/DobChild.png')}
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
                source={require('../src/SaveChane.png')}
              /> 
             </TouchableOpacity>
          </View>

            </ScrollView>
          </View>  


          <View style={styles.navMenu}>
                
               
          <TouchableOpacity
                onPress={() => this.props.navigation.push('Home')}
                 style={styles.nav1}>

                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Image style={{height:25,width:25,marginTop:5}}
                    source={require('../src/Home.png')}
                    />
                    <Text style={{color:'#097790', fontWeight:'bold',marginTop:5}}>
                      Home
                    </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                
                style={styles.nav1}
                >
                <View style={{alignItems:'center', justifyContent:'center'}}>
                <Image style={{height:28.8,width:25.2, marginTop:5}}
                    source={require('../src/Profile.png')}
                    />
                    <Text style={{color:'#097790', fontWeight:'bold', marginTop:5}}>
                      Profile
                    </Text>
                </View>
                </TouchableOpacity>
               
               <TouchableOpacity
               onPress={() => this.props.navigation.push('Library')}
               style={styles.nav1}
               >
                <View style={{alignItems:'center', justifyContent:'center'}}>
                <Image style={{height:26,width:25, marginTop:5}}
                    source={require('../src/Library.png')}
                    />
                    <Text style={{color:'#097790', fontWeight:'bold', marginTop:5}}>
                      Library
                    </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => this.props.navigation.push('MoreOptions')}
                style={styles.nav1}
                >
                <View style={{alignItems:'center', justifyContent:'center'}}>
                <Image style={{height:26,width:25, marginTop:5}}
                    source={require('../src/Morefill.png')}
                    />
                    {/* <View style={{alignItems:'center'}}>
                      <Text>.</Text>
                      <Text>.</Text>
                      <Text>.</Text>
                    </View> */}
                    <Text style={{color:'#097790', fontWeight:'bold', marginTop:5}}>
                      More
                    </Text>
                </View>
                </TouchableOpacity> 

          </View> 
        </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  profile:{
    flex:1,
    backgroundColor:'white',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    flexDirection:'row',
    height: 70,
  },
  sendButtonView:{
    marginTop:20,
    height:60,
    backgroundColor:'white',
    width:230,
    alignSelf:'center',
    flexDirection:'row',
    borderRadius:30,
  },
  sendEmailIcon:{
    height:60,
    width:230,

  },
  profiletxtView:{
    flex:4,
    //backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  profiletxt:{
    fontSize:22,
    fontWeight:'bold',
    color:'#268ea6'
  },
  profileIconView:{
    flex:1,
    backgroundColor:1,
    justifyContent:'center',
    alignItems:'center'
  },
  profileIcon:{
    height:35,
    width:35,
  },
  content:{
    flex:7,
    //backgroundColor:'green',
  },
  contentContainer: {
    paddingVertical: 20
  },
  pInfo:{
    height:30,
    width:100,
    marginTop:5,
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
  navMenu:{
    flex:1,
    backgroundColor:'#8fdff4',
    flexDirection:'row'
  },
  navMenubtn1:{
    flex:1,
    //backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
  },
  navMenubtn2:{
    //backgroundColor:'blue',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  navMenubtn3:{
    //backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },
  navMenubtn4:{
    //backgroundColor:'blue',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  navImage:{
    height:25,
    width:25,
  },
  navText:{
    fontSize:20,
    fontWeight:'bold',
    color:'#08768f'
  },  
  twoTextView:{
    flexDirection:'row',
    marginLeft:25,
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
    //alignItems:'center',white
    justifyContent:'center',
    marginLeft:10,
  },
  emailButtonIcon:{
    height:35,
    width:35
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
  left:{
    marginLeft:7
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
  emailButtonView:{
    marginTop:10,
    height:50,
    backgroundColor:'white',
    width:350,
    alignSelf:'center',
    flexDirection:'row',
    borderRadius:30,
  },

emailButtonTextView3:{
  flex:3,
  //backgroundColor:'red',
  //alignItems:'center',
  justifyContent:'center',
  marginLeft:10,
},

threeText:{
  color:'#4fafc2',
  fontWeight:'bold',
  alignSelf:'center'

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
emailButtonText1:{
  fontWeight:'bold',
  color:'#53adc3',
  marginLeft:10
},
emailButtonTextView:{
  flex:5,
  //backgroundColor:'red',
  //alignItems:'center',
  justifyContent:'center',
  marginLeft:90,
},
imageNameContainer:{
  alignItems:'center',
  justifyContent:'center',
},
imageContainer:{
  height:120,
  width:120,
  backgroundColor:'yellow',
  marginTop:10,
  borderRadius:60,
},
editImageIconView:{
  height:40,
  width:40,
  //backgroundColor:'white',
  borderRadius:60,
  marginTop:5,
},
editImageText:{
  fontSize:25,
  fontWeight:'bold',
  color:'#ff502c'
},
pInfo2:{
  height:30,
  width:100,
  marginTop:30,
  marginLeft:32
  //backgroundColor:'blue',
  //borderRadius:30,
  },
  nav1:{
    flex:1,
    //backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
  },
  
})
