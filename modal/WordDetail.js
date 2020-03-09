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
               <ImageBackground 
               source={require('../src/ConfrimPop.png')}
               style={[styles.modal, {width: this.state.width - 80}]}>
                   <Text style={{fontSize:30, fontWeight:'bold', color:'#ff502c', marginTop:230,}}>
                        Twirl
                    </Text>
                    <Image
                        style={{marginTop:5,}}
                        source={require('../src/Zigzag.png')}
                    />

                    <Text style={{fontWeight:'bold', color:'#52aec3', alignSelf:'center', marginTop:15,}}>
                        Spin quickly and lightly round, especially 
                    </Text>
                    <Text style={{fontWeight:'bold', color:'#52aec3', alignSelf:'center'}}>
                    repeatedly.
                    </Text>

                   
                   <TouchableOpacity style={{height:60, width:165, alignSelf:'center',  borderRadius:30, marginTop:15,}} 
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