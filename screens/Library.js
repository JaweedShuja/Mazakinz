import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
 
class Library extends Component {
    static navigationOptions ={
        header:null
    } 
   render() {
       return (
            <ImageBackground
                style={{width:'100%',height:'100%'}}
                source={require('../src/Common_1.jpg')}>
            <View style={styles.container}>
            <View style={styles.contentPart}>
                <ScrollView>
                <View style={styles.topHeader}>
                    <Text style={styles.topHeaderText}>
                        Library
                    </Text>
                </View>

                <Image
                    style={styles.sideImage}
                    source={require('../src/PurchasedBook.png')}
                />

                <View style={styles.imageSliderView}>
                    <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                        <Image
                            style={styles.imageSliderImage}
                            source={require('../src/book4.jpg')}
                            />
                        <Image
                            style={styles.imageSliderImage}
                            source={require('../src/book5.jpg')}
                            />
                        <Image
                            style={styles.imageSliderImage}
                            source={require('../src/book6.jpg')}
                            />
                        <Image
                            style={styles.imageSliderImage}
                            source={require('../src/book3.jpg')}
                            />
                    </ScrollView>       
                </View>
                <View style={styles.booksTab}>
                    <View style={styles.bookTabHeader}>
                        <View style={styles.bookTabHeader1}>
                            <Text style={styles.tabText}>
                                Currently Reading
                            </Text>
                        </View>
                        <View style={styles.bookTabHeader3}>
                            <Text style={{color:'#4fb1c1'}}>
                                |
                            </Text>
                        </View>
                        <View style={styles.bookTabHeader2}>
                            <Text style={styles.tabText}>
                                Started Yet
                            </Text>    
                        </View>
                    </View>
                    <View style={styles.booksTabImageView}>
                        <View style={styles.booksTabImage}>
                            <Image
                                style={styles.bookImage}
                                source={require('../src/book1.jpg')}
                            />
                        </View>
                        <View style={styles.booksTabImage}>
                            <Image
                                style={styles.bookImage}
                                source={require('../src/book2.jpg')}
                            />
                        </View>
                        <View style={styles.booksTabImage}>
                            <Image
                                style={styles.bookImage}
                                source={require('../src/book3.jpg')}
                            />
                        </View>
                    </View>     
                </View>
                </ScrollView>
                </View>
                <View style={styles.navPart}>
                <View style={styles.bottomNav}>
                <TouchableOpacity
                onPress={() => this.props.navigation.push('Home')}
                 style={styles.nav1}>

                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Image style={{height:25,width:25,marginTop:5}}
                    source={require('../src/Home.png')}
                    />
                    <Text style={{color:'#097790', fontWeight:'bold',marginTop:5}}>
                      Home
                    </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => this.props.navigation.push('MyProfile')}
                style={styles.nav1}
                >
                <View style={{alignItems:'center', justifyContent:'center'}}>
                <Image style={{height:28.8,width:25.2, marginTop:5}}
                    source={require('../src/Profile.png')}
                    />
                    <Text style={{color:'#097790', fontWeight:'bold', marginTop:5}}>
                      Profile
                    </Text>
                </View>
                </TouchableOpacity>
               
               <TouchableOpacity
               //onPress={() => this.props.navigation.push('Library')}
               style={styles.nav1}
               >
                <View style={{alignItems:'center', justifyContent:'center'}}>
                <Image style={{height:26,width:25, marginTop:5}}
                    source={require('../src/Library.png')}
                    />
                    <Text style={{color:'#097790', fontWeight:'bold', marginTop:5}}>
                      Library
                    </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => this.props.navigation.push('MoreOptions')}
                style={styles.nav1}
                >
                <View style={{alignItems:'center', justifyContent:'center'}}>
                <Image style={{height:26,width:25, marginTop:5}}
                    source={require('../src/Morefill.png')}
                    />
                    {/* <View style={{alignItems:'center'}}>
                      <Text>.</Text>
                      <Text>.</Text>
                      <Text>.</Text>
                    </View> */}
                    <Text style={{color:'#097790', fontWeight:'bold', marginTop:5}}>
                      More
                    </Text>
                </View>
                </TouchableOpacity>

              </View>
                </View>
                </View>
            </ImageBackground>
        )
    }
}

export default Library

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    contentPart:{
        flex:7,
    },
    navPart:{
        flex:1,
    },
    topHeader:{
        height:70,
        backgroundColor:'white',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        alignItems:'center',
        justifyContent:'center',
    },
    topHeaderText:{
        color:'#248ea6',
        fontSize:30,
        fontWeight:'bold',
    },
    sideImage:{
        height:30,
        width:200,
        marginTop:20,
    },
    imageSliderView:{
        height:250,
        marginTop:10,
    },
    imageSliderImage:{
        height:200, 
        width:150, 
        borderRadius:10, 
        margin:10,
    },
    booksTab:{
        height:220, 
        width:320,
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius:30,
        marginBottom:10,
    },
    bookTabHeader:{
        height:50,
        backgroundColor:'#effbfe',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        flexDirection:'row',
    },
    bookTabHeader1:{
        flex:5,
        alignItems:'center',
        justifyContent:'center',
    },
    bookTabHeader2:{
        flex:5,
        alignItems:'center',
        justifyContent:'center',
    },
    bookTabHeader3:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    tabText:{
        color:'#52aec2',
    },
    booksTabImageView:{
        height:155,
        width:280,
        alignSelf:'center',
        marginTop:5,
        flexDirection:'row',
    },
    booksTabImage:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    bookImage:{
        height:145, 
        width:90,
        margin:10,
        borderRadius:10,
    },
    bottomNav:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#8fdff4',
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