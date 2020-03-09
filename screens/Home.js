import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native'
 
class Home extends Component {
  static navigationOptions ={
    header:null
} 
   render() {
       return (
           <View style={styles.container}>
              <View style={styles.topContent}>
              <ImageBackground source={require('../src/Common_1.jpg')} style={{width: '100%', height: '100%'}}>
                <ScrollView>
                  <Image
                  style={styles.mazakinLogo}
                  source={require('../src/MazakinsLogo1.png')}
                  />

                  <View style={styles.sticker}>

                      <View style={styles.recommand}>
                        <Image
                          style={{height:34, width:130,}}
                          source={require('../src/Recommend.png')}
                        />
                      </View>
                      <View style={styles.seeMore}>
                          <Image
                          style={{height:32, width:90, marginLeft:30,}}
                          source={require('../src/Viewall.png')}
                          />
                      </View>

                  </View>

                  <View style={styles.books}>
                    <View style={styles.book1}>
                      <Image
                      style={{height:162, width:117, borderRadius:10,}}
                      source={require('../src/book2.jpg')}

                      />
                    </View>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.push('Story')}
                     style={styles.book2}>
                      
                    <Image
                      style={{height:217.8, width:157.3, borderRadius:10,}}
                      source={require('../src/book1.jpg')}
                      />

                    </TouchableOpacity>
                    <View style={styles.book3}>
                    <Image
                      style={{height:162, width:117, borderRadius:10,}}
                      source={require('../src/book3.jpg')}
                      />
                    </View>
                  </View>

                  <View style={styles.sticker}>

                <View style={styles.recommand}>
                  <Image
                    style={{height:34, width:130,}}
                    source={require('../src/arrival.png')}
                  />
                </View>
                <View style={styles.seeMore}>
                    <Image
                    style={{height:32, width:90, marginLeft:30,}}
                    source={require('../src/Viewall.png')}
                    />
                </View>

                </View>

                <View style={styles.letest}>

                  <ScrollView horizontal={true}>

                  <Image
                      style={{height:180, width:130, borderRadius:10, margin:10,}}
                      source={require('../src/book4.jpg')}
                      />

                  <Image
                      style={{height:180, width:130, borderRadius:10,  margin:10,}}
                      source={require('../src/book5.jpg')}
                      />

                  <Image
                      style={{height:180, width:130, borderRadius:10,  margin:10,}}
                      source={require('../src/book6.jpg')}
                      />

                  <Image
                      style={{height:180, width:130, borderRadius:10,  margin:10,}}
                      source={require('../src/book3.jpg')}
                      />
                      
                  </ScrollView>


                </View>



                </ScrollView>
              </ImageBackground>
              </View>
              <View style={styles.bottomNav}>

                <TouchableOpacity
                // onPress={() => this.props.navigation.push('Home')}
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
                onPress={() => this.props.navigation.push('MyProfile')}
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
           </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  topContent:{
    flex:7,
  },
  bottomNav:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#8fdff4',
  },
  mazakinLogo:{
    width:345,
    height:120,
    alignSelf:'center',
    marginTop:20,
  },
  sticker:{
    flex:1,
    flexDirection:'row',
    height:50,
    marginTop:10,
  },
  recommand:{
    flex:4,
    justifyContent:'center',
  },
  seeMore:{
    flex:2,
    justifyContent:'center',
  },
  books:{
    flex:1,
    flexDirection:'row',
    height:200,
    marginTop:10,
  },
  book1:{
    flex:1,
    margin:5,
    alignItems:'center',
    justifyContent:'center',

  },
  book2:{
    flex:1,
    margin:5,
    alignItems:'center',
    justifyContent:'center',
  },
  book3:{
    flex:1,
    margin:5,
    alignItems:'center',
    justifyContent:'center',
  },
  letest:{
    flex:1,
    height:200,
    
  },
  nav1:{
    flex:1,
    //backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
  },
  nav2:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  nav3:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  nav4:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})

export default Home
