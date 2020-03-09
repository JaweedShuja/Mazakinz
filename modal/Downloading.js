import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity, ProgressBarAndroid } from 'react-native'
 
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
               <ImageBackground 
               source={require('../src/ConfrimPop.png')}
               style={[styles.modal, {width: this.state.width - 80}]}>

                    <Image
                    style={{height:100, width:100, marginTop:50}}
                    source={require('../src/Donwloading.png')}
                    />

                   <Text style={{fontSize:30, fontWeight:'bold', color:'#ff502c', marginTop:70}}>
                        Book Downloading
                    </Text>
                    <Image
                        style={{marginTop:5,}}
                        source={require('../src/Zigzag.png')}
                    />

                    <Text style={{fontWeight:'bold', color:'#52aec3', alignSelf:'center', marginTop:15,}}>
                        Email has now been sent with the reset 
                    </Text>
                    <Text style={{fontWeight:'bold', color:'#52aec3', alignSelf:'center'}}>
                    password link.
                    </Text>

                    
        

        <ProgressBarAndroid
            style={{width:200,}}
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.45}
        />
        <Text style={{alignSelf:'center', color:'#18a094'}}>
            45%
        </Text>

                   <TouchableOpacity style={{height:60, width:165, alignSelf:'center',  borderRadius:30, marginTop:15, marginBottom:10,}} 
                   onPress={() => this.closeModal('Cancel')}
                   >
                        <Image 
                        style={{height:60, width:165,}}
                        source={require('../src/Close.png')}
                        
                        />
                   </TouchableOpacity>
                    

                     
               </ImageBackground>
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
        height:450,
        paddingTop:10,
        alignSelf:'center',
        alignItems:'center',
        textAlign:'center',
        backgroundColor:'transparent',
        borderRadius:20,
        
     },  
     image:{
         height:400,
         width:340,
     }
})