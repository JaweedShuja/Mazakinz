import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native'
 
class BookCreated extends Component {

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
                        Book Created
                    </Text>
                    <Image
                        style={{marginTop:5,}}
                        source={require('../src/Zigzag.png')}
                    />

                    <Text style={{fontWeight:'bold', color:'#52aec3', alignSelf:'center', marginTop:15,}}>
                        You can save the book in the library 
                    </Text>
                    <Text style={{fontWeight:'bold', color:'#52aec3', alignSelf:'center'}}>
                    or delete it.
                    </Text>

                        <View style={{flex:1, flexDirection:'row', marginLeft:10,}}>
                            <View style={{flex:1}}>

                            <TouchableOpacity style={{height:60, width:165, alignSelf:'center',  borderRadius:30, marginTop:15,}} 
                   onPress={() => this.closeModal('Cancel')}
                   >
                        <Image 
                        style={{height:54, width:148,}}
                        source={require('../src/SaveBook.png')}
                        
                        />
                   </TouchableOpacity>

                            </View>
                            <View style={{flex:1,}}>

                            <TouchableOpacity style={{height:60, width:165, alignSelf:'center',  borderRadius:30, marginTop:15,}} 
                   onPress={() => this.closeModal('Cancel')}
                   >
                        <Image 
                        style={{height:54, width:148,}}
                        source={require('../src/DeleteBook.png')}
                        
                        />
                   </TouchableOpacity>

                            </View>
                        </View>
                   
                  
                    

                     
               </ImageBackground>
           </View>
        )
    }
}

export default BookCreated

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