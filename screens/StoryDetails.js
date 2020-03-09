import React, { Component } from 'react'
import { View, ImageBackground, Text, ScrollView, StyleSheet, TouchableOpacity, Image, ProgressBarAndroid } from 'react-native'
 
class StoryDetails extends Component {
    static navigationOptions ={
        header:null
    } 
   render() {
       return (
        <ImageBackground
        source={require('../src/Common.jpg')}
        style={{width:'100%',height:'100%'}} >
            <ScrollView>
            <View style={styles.topView}>
                    <View style={styles.topView1}>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.push('Story')}
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

              
                <View style={{height:400, backgroundColor:'white', marginLeft:30, marginRight:30, marginTop:10,}}>
                <ImageBackground
                        source={require('../src/book1.jpg')}
                        style={{width:'100%',height:'100%', 
                        borderRadius:20,}}
                    >
                        <TouchableOpacity>
                            <Image
                                style={{height:80, width:80, alignSelf:'center', marginTop:170,}}
                                source={require('../src/Play.png')}
                            />
                        </TouchableOpacity>

                        
                                <View style={{height:50, width:330, alignSelf:'center', flexDirection:'row', marginTop:60, backgroundColor:'black', opacity:0.5, borderRadius:30}}>
                                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                        <Text style={{color:'white'}}>
                                            11:34
                                        </Text>
                                    </View>
                                    <View style={{flex:5, alignItems:'center', justifyContent:'center'}}>
                                    <ProgressBarAndroid
            style={{width:200, height:30, alignSelf:'center'}}
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.45}
        />
                                    </View>
                                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{color:'white'}}>
                                            41:11
                                        </Text>
                                    </View>
                                </View>
                               
        
                    </ImageBackground>

                </View>

                <View style={{height:300, backgroundColor:'white', marginLeft:20, marginRight:20, borderRadius:30, marginBottom:30,}}>
                    
                    <Image
                        
                        style={{height:30, width:100, marginTop:20,}}
                        source={require('../src/Synopsis.png')}
                    />
                    <Text style={{fontSize:18, margin:20,}}>

                        This colorful picture book contains endearing examples and vibrant illustrations of people doing good to inspire children to grateful, caring and kind . Be it the people that built houses, deliver babies, or take care of others, the message is that people are good.
                    </Text>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.push('PaymentOptions')}
                    >
                    <Image
                        
                        style={{height:60, width:310, marginTop:20, alignSelf:'center'}}
                        source={require('../src/BuyNow.png')}
                    />
                    </TouchableOpacity>

                </View>
            </ScrollView>
            </ImageBackground>

        )
    }
}

export default StoryDetails

const styles = StyleSheet.create({
    topView:{
        flexDirection:'row',
        height:70,
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
    middleView:{
        height:400,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
})