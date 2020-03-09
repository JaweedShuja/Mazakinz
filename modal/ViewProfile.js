import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native'
 
class Conformation extends Component {

    constructor(props){
        super(props);
        this.state = {
            width: Dimensions.get('window').width, 
        };
        Dimensions.addEventListener('change', (e) => {
            this.setState(e.window);
        });
    }

    closeModal = (data) => {
        this.props.changeModalVisibility(false);
        this.props.setData(data)
    }

   render() {
       return (
           <View style={styles.container}>
               <View 
               style={[styles.modal, {width: this.state.width - 80}]}>
                   <Text style={{fontSize:30, fontWeight:'bold', color:'#ff502c', marginTop:10,}}>
                        Child Profiles
                    </Text>
                    <Image
                        style={{marginTop:5,}}
                        source={require('../src/Zigzag.png')}
                    />

                    <Text style={{fontWeight:'bold', color:'#52aec3', alignSelf:'center', marginTop:15,}}>
                        Just tab view Child Profile 
                    </Text>
                    <Text style={{fontWeight:'bold', color:'#52aec3', alignSelf:'center'}}>
                    below.
                    </Text>

                    <View style={{width: this.state.width - 100,  height:70,}}>
                        <View style={{flex:20, flexDirection:'row'}}>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                <Image
                                    style={{height:50, width:50, borderRadius:50,}}
                                    source={require('../src/book1.jpg')}
                                />
                            </View>
                            <View style={{flex:3, alignItems:'center', justifyContent:'center'}}>

                                <Text style={{fontSize:18, fontWeight:'bold', color:'#ff502c'}}>
                                    Felix's screentime
                                </Text>
                            </View>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                <Image
                                style={{height:30, width:30,}}
                                source={require('../src/Radio.png')}
                                />
                            </View>
                        </View>
                        <View style={{flex:1, backgroundColor:'gray'}}>

                        </View>
                    </View>

                    <View style={{width: this.state.width - 100,  height:70,}}>
                        <View style={{flex:20, flexDirection:'row'}}>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                <Image
                                    style={{height:50, width:50, borderRadius:50,}}
                                    source={require('../src/book2.jpg')}
                                />
                            </View>
                            <View style={{flex:3, alignItems:'center', justifyContent:'center'}}>

                                <Text style={{fontSize:18, fontWeight:'bold', color:'#ff502c'}}>
                                    Joy's screentime
                                </Text>
                            </View>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

                            <Image
                                style={{height:30, width:30,}}
                                source={require('../src/Radio1.png')}
                                />
                            </View>
                        </View>
                        <View style={{flex:1, backgroundColor:'gray'}}>

                        </View>
                    </View>

                    <View style={{width: this.state.width - 100,  height:70,}}>
                        <View style={{flex:20, flexDirection:'row'}}>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                <Image
                                    style={{height:50, width:50, borderRadius:50,}}
                                    source={require('../src/book3.jpg')}
                                />
                            </View>
                            <View style={{flex:3, alignItems:'center', justifyContent:'center'}}>

                                <Text style={{fontSize:18, fontWeight:'bold', color:'#ff502c'}}>
                                    Kevin's screentime
                                </Text>
                            </View>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

                            <Image
                               style={{height:30, width:30,}}
                                source={require('../src/Radio1.png')}
                                />
                            </View>
                        </View>
                        <View style={{flex:1, backgroundColor:'gray'}}>

                        </View>
                    </View>

                    <View style={{width: this.state.width - 100,  height:70,}}>
                        <View style={{flex:20, flexDirection:'row'}}>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                <Image
                                    style={{height:50, width:50, borderRadius:50,}}
                                    source={require('../src/book4.jpg')}
                                />
                            </View>
                            <View style={{flex:3, alignItems:'center', justifyContent:'center'}}>

                                <Text style={{fontSize:18, fontWeight:'bold', color:'#ff502c'}}>
                                    Maria's screentime
                                </Text>
                            </View>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

                            <Image
                               style={{height:30, width:30,}}
                                source={require('../src/Radio1.png')}
                                />
                            </View>
                        </View>
                        <View style={{flex:1, backgroundColor:'gray'}}>

                        </View>
                    </View>

                   
                   <TouchableOpacity style={{height:60, width:165, alignSelf:'center',  borderRadius:30, marginTop:45,}} 
                   onPress={() => this.closeModal('Cancel')}
                   >
                        <Image 
                        style={{height:60, width:165,}}
                        source={require('../src/Close.png')}
                        
                        />
                   </TouchableOpacity>
                    

                     
               </View>
           </View>
        )
    }
}

export default Conformation

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    modal:{
        height:550,
        paddingTop:10,
        alignSelf:'center',
        alignItems:'center',
        textAlign:'center',
        backgroundColor:'white',
        borderRadius:20,
        
     },  
     image:{
         height:400,
         width:340,
     }
})