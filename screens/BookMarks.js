import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

 
class BookMarks extends Component {
    static navigationOptions ={
        header:null
    } 
   render() {
       return (
           <ImageBackground
           source={require('../src/Common_1.jpg')}
           style={{width:'100%',height:'100%'}} >
               <ScrollView>

                    <View style={styles.topView}>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                <TouchableOpacity
                                onPress={() => this.props.navigation.push('Story')}
                                >
                                    <Image
                                    style={{height:25, width:25}}
                                    source={require('../src/Back.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:5, justifyContent:'center',}}>
                                <Text
                                    style={{fontSize:25, fontWeight:'bold', color:'#268ea6', marginLeft:60,}}
                                >
                                    Bookmarks
                                </Text>
                            </View>
                        </View>
                    </View>

                    <Image
                    style={{alignSelf:'center', marginTop:10, borderRadius:20,marginBottom:30,}}
                    source={require('../src/book1.jpg')}
                    /> 

                    <View style={styles.markView}>
                        <View style={{flex:1, flexDirection:'row', }}>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                               <Text style={{fontWeight:'bold', color:'#51aec2'}}>
                                   1:00pm
                               </Text>
                               <Image
                                    style={{height:6, width:40, marginTop:5}}
                                    source={require('../src/Zigzag.png')}
                               />
                               <Text style={{fontWeight:'bold', color:'#51aec2', marginTop:5}}>
                                   Today
                               </Text>
                            </View>
                            <View style={{flex:3, justifyContent:'center'}}>
                                <Text style={{fontSize:20, color:'#ff502b', fontWeight:'bold'}}>
                                    Page1
                                </Text>
                                <Text style={{ color:'#52aec2'}}>
                                    It was a crisp and fresh Autumn morning. A
                                </Text>
                                <Text style={{ color:'#52aec2'}}>
                                    little boy was staring out...
                                </Text>
                            </View>
                        </View>
                    </View> 

                    <View style={[styles.markView,{marginBottom:30,}]}>
                        <View style={{flex:1, flexDirection:'row', }}>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                               <Text style={{fontWeight:'bold', color:'#51aec2'}}>
                                   4:00pm
                               </Text>
                               <Image
                                    style={{height:6, width:40, marginTop:5}}
                                    source={require('../src/Zigzag.png')}
                               />
                               <Text style={{fontWeight:'bold', color:'#51aec2', marginTop:5}}>
                                   Today
                               </Text>
                            </View>
                            <View style={{flex:3, justifyContent:'center'}}>
                                <Text style={{fontSize:20, color:'#ff502b', fontWeight:'bold'}}>
                                    Page2
                                </Text>
                                <Text style={{ color:'#52aec2'}}>
                                    When they were walking down to the park,
                                </Text>
                                <Text style={{ color:'#52aec2'}}>
                                    they saw a house built...
                                </Text>
                            </View>
                        </View>
                    </View> 

               </ScrollView>
           </ImageBackground>
        )
    }
}

export default BookMarks

const styles = StyleSheet.create({
    topView:{
        height:70,
    },
    markView:{
        height:100,
        backgroundColor:'white',
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        borderRadius:20,

    }
})