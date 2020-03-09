import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
 
class Splash extends Component {

    constructor(props){
        super(props)

        this.state = {
            value:0,
        }

        setInterval(() => {

            if(this.state.value == 0){
                this.props.navigation.push('Login')
                this.setState({
                    value:1,
                })
            }


          },1000);

    }

    static navigationOptions = {
        header:null
    }
   render() {
       return (
           <View style={styles.container}>
               <Image
                    style={{height:160, width:300}}
                    source={require('../src/Mazakins.png')}
               />
           </View>
        )
    }
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ace9f7',
        alignItems:'center',
        justifyContent:'center'
    }
})