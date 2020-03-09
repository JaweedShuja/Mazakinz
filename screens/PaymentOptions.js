import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

class PaymentOptions extends Component{
    static navigationOptions ={
        header:null
    } 
    static navigationOptions = {
        header:null
    };
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleView}>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.push('StoryDetails')}
                     style={styles.titleBackView}>

                    <View style={styles.titleBackView}>
                        <Image 
                        style={styles.titleBack}
                        source={require('../src/Back.png')}
                        />
                    </View>

                    </TouchableOpacity>
                    <View style={styles.titleTextView}>
                        <Text style={styles.titleText}>
                            Payment Options
                        </Text>
                    </View>
                </View>

                <ScrollView contentContainerStyle={styles.contentContainer}>
    
                <Text style={styles.txt1}>
                    STRIPE PAYMENT OPTIONS
                </Text>

                <View style={styles.subsTabViewMain}>
                    <View style={styles.subsTabView}>
                        <View style={styles.subsTabViewText}>
                            <Text style={styles.subsTabViewText1}>
                                One-off payment
                            </Text>

                            <Text style={styles.subsTabViewText2}>
                                Choose card
                            </Text>
                        </View>
                        <View style={styles.subsTabViewPrice}>
                            <Text style={styles.subsTabViewPrice1}>
                                $14.99
                            </Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.txt1}>
                    OR Pay by monthly subscription via stripe
                </Text>

                <View style={styles.subsTabViewMain}>
                    <View style={styles.subsTabView}>
                        <View style={styles.subsTabViewText}>
                            <Text style={styles.subsTabViewText1}>
                                Monthly Payment
                            </Text>

                            <Text style={styles.subsTabViewText2}>
                                Pay monthly
                            </Text>
                        </View>
                        <View style={styles.subsTabViewPrice}>
                            <Text style={styles.subsTabViewPrice1}>
                                $9.99
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.subsTabViewMain}>
                    <View style={styles.subsTabView}>
                        <View style={styles.subsTabViewText}>
                            <Text style={styles.subsTabViewText1}>
                                Annual Payment
                            </Text>

                            <Text style={styles.subsTabViewText2}>
                                Pay yearly 
                            </Text>
                        </View>
                        <View style={styles.subsTabViewPrice}>
                            <Text style={styles.subsTabViewPrice1}>
                                $110.99
                            </Text>
                        </View>
                    </View>
                </View>

                

                <View style={styles.lastPartView}>
                    <TouchableOpacity>
                        <View style={styles.lastPartViewBtn}>
                            <Text style={styles.btnTxt}>
                                stripe
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                </ScrollView>
            </View>
        );
    }
}

export default PaymentOptions;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e8f8f9',
        flex:1,
    },
    titleView:{
        height:70,
        backgroundColor:'white',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        flexDirection:'row'
    },
    titleBackView:{
        //backgroundColor:'blue',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    titleBack:{
        height:25,
        width:25,
    },
    titleTextView:{
        //backgroundColor:'green',
        flex:4,
        justifyContent:'center',
    },
    titleText:{
        fontSize:25,
        fontWeight:'bold',
        color:'#248fa5',
        marginLeft:40,
    },
    txt1:{
        color:'#248fa5',
        marginTop:30,
        fontWeight:'bold',
        marginLeft:30,
        fontSize:18,
        
    },
    subsTabViewMain:{
        marginTop:10,
        paddingLeft:25,
        paddingRight:25,
    },
    subsTabView:{
        height:100,
        backgroundColor:'white',
        borderRadius:25,
        flexDirection:'row',
    },
    subsTabViewText:{
        flex:2,
        //backgroundColor:'blue'
        justifyContent:'center',
    },
    subsTabViewPrice:{
        flex:1,
        //backgroundColor:'green'
        //justifyContent:'center'
    },
    subsTabViewPrice1:{
        fontSize:22,
        fontWeight:'bold',
        color:'#4ffd1c',
        //marginLeft:80,
        marginTop:30,
    },  
    subsTabViewText1:{
        fontSize:20,
        fontWeight:'bold',
        color:'#268ea6',
        marginLeft:25,
    },
    subsTabViewText2:{
        fontWeight:'bold',
        color:'#89afb9',
        marginTop:15,
        marginLeft:25,
    },
    lastPartView:{
        height:180,
        //backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'

    },
    lastPartViewBtn:{
        height:50,
        width:250,
        borderRadius:30,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        
        alignSelf:'center',
    },
    lastPartViewBtnView:{
        alignItems:'center',
        justifyContent:'center',
    },  
    lastPartViewText:{
        fontWeight:'bold',
        marginTop:20,
        color:'#268ea6',
    },
    btnTxt:{
        fontSize:40,
        fontWeight:'bold',
        color:'#7f1fe9'
    }  
})

