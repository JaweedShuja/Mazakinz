import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
 
class Story extends Component {
    static navigationOptions ={
        header:null
    } 
   render() {
       return (
           <ImageBackground
           source={require('../src/Common.jpg')}
           style={{width:'100%',height:'100%'}} >
               <View style={styles.container}>

               
               <View style={styles.topView}>
                    <View style={styles.topView1}>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.push('Home')}
                        >

                            <Image
                                style={{height:25, width:25}}
                                source={require('../src/Back.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.topView2}>
                        <Text style={{fontSize:25, fontWeight:'bold', color:'#258ea6'}}
                        >Crabby the Crab</Text>
                    </View>
               </View>

                <View style={styles.middleView}>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.push('StoryDetails')}
                    >

                    
                    <Image
                        source={require('../src/book1.jpg')}
                        style={{width:300,height:400, 
                        borderRadius:20,}}
                    />
                    </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={{height:60, width:370, alignSelf:'center', marginTop:10}}
                                source={require('../src/TakePhoto.png')}
                            />
                        </TouchableOpacity>
                    {/* </ImageBackground> */}

                    {/* <Image
                    style={styles.middleImage}
                    source={require('../src/book1.jpg')}>
                        
                    </Image> */}

                </View>  
                <View style={styles.navView}>
                <View style={styles.bottomNav}>
                <TouchableOpacity
                onPress={() => this.props.navigation.push('BookMarks')}
                 style={styles.nav1}>
                    <Image style={{height:30,width:30,}}
                    source={require('../src/Bookmark12.png')}
                    />
                    <Text style={{color:'#097790', fontWeight:'bold', fontSize:12}}>
                      Bookmarks
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => this.props.navigation.push('Library')}
                style={styles.nav2}>
                <Image style={{height:30,width:30,}}
                    source={require('../src/Library12.png')}
                    />
                    <Text style={{color:'#097790', fontWeight:'bold', fontSize:12}}>
                      Library
                    </Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.nav3}>
                <Image style={{height:30,width:30,}}
                    source={require('../src/Nmode.png')}
                    />
                    <Text style={{color:'#097790', fontWeight:'bold', fontSize:12}}>
                      Normal Mode
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nav4}>
                <Image style={{height:30,width:30,}}
                    source={require('../src/AniMode.png')}
                    />
                    <Text style={{color:'#097790', fontWeight:'bold', fontSize:12}}>
                      Animation Mode
                    </Text>
                </TouchableOpacity>

              </View>
                </View> 

               </View>
                {/* <View style={{width:'100%', alignItems:'center', justifyContent:'center', marginLeft:5,}}>
               <ImageBackground
               source={require('../src/book2.jpg')}
               style={{width:'97%',height:'100%', alignSelf:'center'}}
               >

               </ImageBackground>
               </View> */}
           </ImageBackground>
        )
    }
}

export default Story

const styles = StyleSheet.create({
    topView:{
        flexDirection:'row',
        //height:50,
        flex:1,
    },
    middleView:{
        flex:5,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        borderRadius:20,
    },
    navView:{
        flex:1,
    },
    topView1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    topView2:{
        flex:5,
        justifyContent:'center',
    },
    container:{
        flex:1,
    },
    middleImage:{
        borderRadius:20,
        
    },
    bottomNav:{
        flex:1,
        flexDirection:'row',
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