import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import WordDetail from '../modal/WordDetail'
import ViewProfile from '../modal/ViewProfile' 

class ParentDashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
        isModalVisible:false,
        isModalVisible2:false,
        choosenData: '',
        choosenData2:'',
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

  changeModalVisibility2 = (bool) => {
    this.setState({ isModalVisible2: bool });
  }
  setData2 = (data) => {
    this.setState({choosenData2: data})
  }

   render() {
       return (
           <View style={styles.container}>
              <ImageBackground
              source={require('../src/Common_1.jpg')} style={{width:'100%', height:'100%'}}>

                <View style={styles.upperContainer}>
                  <View style={styles.upperContainer1}>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.push('MoreOptions')}
                    >
                    <Image
                      source={require('../src/Back.png')}
                      style={{width:25,height:25,}}
                    />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.upperContainer2}>
                  <Text 
                    style={{fontSize:25, fontWeight:'bold', color:'#268ea6', marginLeft:10}}>
                        Andrea's Dashboard
                  </Text> 

                   
                  </View>
                </View>
                <ScrollView>
                  <TouchableOpacity
                  onPress={() => this.changeModalVisibility2(true) }
                  >
                <Image
                      style={{height:110, width:110, borderRadius:70, alignSelf:'center',}}
                      source={require('../src/book1.jpg')}
                />
                </TouchableOpacity>

                <Text 
                style={{fontSize:25, fontWeight:'bold', color:'#ff502c', alignSelf:'center', marginTop:10}}
                >
                    Folix's screentime
                </Text>

                <View style={styles.tab1}>
                  <Image
                    style={{height:35, width:35, marginTop:10,}}
                    source={require('../src/Booksread.png')}
                  />
                  <Text style={{fontSize:18, color:'#52aec2', fontWeight:'bold', marginTop:10}}>
                    Time of book reading
                  </Text>
                    <View style={{flex:1,flexDirection:'row'}}>
                      <View>
                        <Text style={{fontSize:30, fontWeight:'bold',color:'#ff502b'}}>
                          50
                        </Text>
                      </View>
                      <View >
                        <Text style={{marginTop:15, fontWeight:'bold', color:'#a5c0c5'}}>
                          minuts
                        </Text>
                      </View>
                    </View>
                </View>

                <View style={styles.tab2}>
                  <View style={{height:50,backgroundColor:'#effbfe', borderTopLeftRadius:30, borderTopRightRadius:30, flexDirection:'row'}}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold', color:'#51aec2'}}>
                            Currently reading
                        </Text>
                    </View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold', color:'#51aec2'}}>
                            Books Completed
                        </Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'row', flex:1,}}>
                      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Image
                          source={require('../src/book1.jpg')}
                          style={{height:150, width:100, borderRadius:5,}}
                        />
                      </View>
                      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                      <Image
                          source={require('../src/book2.jpg')}
                          style={{height:150, width:100, borderRadius:5,}}
                        />
                      </View>
                      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                      <Image
                          source={require('../src/book3.jpg')}
                          style={{height:150, width:100, borderRadius:5,}}
                        />
                      </View>
                  </View>
                </View>

                <TouchableOpacity onPress={() => this.changeModalVisibility(true) } style={styles.tab3}>
                  
                  <View style={{flex:2, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold', color:'#50afc2'}}>
                      1:00pm
                    </Text>
                    <Text style={{fontWeight:'bold', color:'#50afc2', marginTop:10,}}>
                      Today
                    </Text>
                  </View>
                  <View style={{flex:5, justifyContent:'center',}}>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'#ff5128'}}>
                      Dictionary Search
                    </Text>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'#52aec2'}}>
                      Twirl
                    </Text>
                    <Text style={{fontWeight:'bold', color:'#a5c0c5'}}>
                      Page 1
                    </Text>
                  </View>
                </TouchableOpacity>
                <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}
               animationType='fade'>
                    <WordDetail changeModalVisibility={this.changeModalVisibility } setData={this.setData} />
               </Modal>
               <Modal transparent={true} visible={this.state.isModalVisible2} onRequestClose={() => this.changeModalVisibility2(false)}
               animationType='fade'>
                    <ViewProfile changeModalVisibility={this.changeModalVisibility2 } setData={this.setData2} />
               </Modal>
               

                </ScrollView>
              </ImageBackground>
           </View>
        )
    }
}

export default ParentDashboard

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  upperContainer:{
    height:70,
    backgroundColor:'white',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    flexDirection:'row',
  },
  upperContainer1:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  upperContainer2:{
    flex:4,
    justifyContent:'center',
  },
  tab1:{
    height:130,
    backgroundColor:'white',
    marginTop:10,
    marginLeft:25,
    marginRight:25,
    borderRadius:25,
    alignItems:'center',
  },
  tab2:{
    height:220,
    backgroundColor:'white',
    marginTop:10,
    marginLeft:25,
    marginRight:25,
    borderRadius:25,
  },
  tab3:{
    height:100,
    backgroundColor:'white',
    marginTop:10,
    marginLeft:25,
    marginRight:25,
    borderRadius:20,
    marginBottom:20,
    flexDirection:'row',
  },  
})
