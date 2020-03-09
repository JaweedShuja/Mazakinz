import React, { Component } from 'react'
import { View, Text, StyleSheet, Modal, TouchableHighlight } from 'react-native'
import ModalOne from '../modal/ModalOne'
import Conformation from '../modal/Confirmation'
import DeleteAccount from '../modal/DeleteAccount'
import BookCreated from '../modal/BookCreated'
import WordDetail from '../modal/WordDetail'
import ViewProfile from '../modal/ViewProfile'
import Downloading from '../modal/Downloading' 


class codeOne extends Component {
   constructor(props){
       super(props)
       this.state = {
           isModalVisible:false,
           choosenData: '',
       }
   } 
   static navigationOptions ={
       header:null
   } 

   changeModalVisibility = (bool) => {
       this.setState({ isModalVisible: bool });
   }

   setData = (data) => {
       this.setState({choosenData: data})
   }
 //isModalVisible
   render() {
       return (
           <View style={styles.contentContainer}>
               <Text style={styles.text}>
                    {this.state.choosenData}
               </Text>
               <TouchableHighlight onPress={() => this.changeModalVisibility(true) } style={[styles.touchableHighlight, {backgroundColor:'orange'}]}
               underlayColor={'#f1f1f1'}
               >
                   <Text style={styles.text}>Open Modal </Text>
               </TouchableHighlight>
               <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}
               animationType='fade'>
                    <ViewProfile changeModalVisibility={this.changeModalVisibility } setData={this.setData} />
               </Modal>

           </View>
        )
    }
}

export default codeOne

const styles = StyleSheet.create({
    contentContainer:{
        flex:1,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        marginVertical:20,
        fontSize:20,
        fontWeight:'bold',
    },
    touchableHighlight:{
        backgroundColor:'white',
        alignSelf:'stretch',
        alignItems:'center',
    }
})