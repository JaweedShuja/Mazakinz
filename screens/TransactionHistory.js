import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

class TransactionHistory extends Component{
    static navigationOptions ={
        header:null
    } 
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleView}>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.push('MoreOptions')}
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
                            Transaction history
                        </Text>
                    </View>
                </View>

                <ScrollView contentContainerStyle={styles.contentContainer}>

                <View style={styles.totalContainer}>
                    <Text style={styles.totalTxt1}>
                        $714.40
                    </Text>
                    <Text style={styles.totalTxt2}>
                        Total spending
                    </Text>
                    <Text style={styles.totalTxt3}>
                        This month
                    </Text>
                </View>


                <View style={styles.txtView}>

              
                <Text style={styles.txtView1}>
                    TRANSACTION HISTORY
                </Text>

                <Text style={styles.txtView2}>
                    View all
                </Text>

                </View>


                <View style={styles.subsTabViewMain}>
                    <View style={styles.subsTabView}>
                        <View style={styles.subsTabViewText}>
                            <Text style={styles.subsTabViewText1}>
                                My dream about spece
                            </Text>

                            <Text style={styles.subsTabViewText2}>
                                10 August, 2019
                            </Text>
                        </View>
                        <View style={styles.subsTabViewPrice}>
                            <Text style={styles.subsTabViewPrice1}>
                                $19.99
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.subsTabViewMain}>
                    <View style={styles.subsTabView}>
                        <View style={styles.subsTabViewText}>
                            <Text style={styles.subsTabViewText1}>
                                Lost for words 
                            </Text>

                            <Text style={styles.subsTabViewText2}>
                                9 August, 2019
                            </Text>
                        </View>
                        <View style={styles.subsTabViewPrice}>
                            <Text style={styles.subsTabViewPrice1}>
                                $17.40
                            </Text>
                        </View>
                    </View>
                </View>
                
                <View style={styles.subsTabViewMain}>
                    <View style={styles.subsTabView}>
                        <View style={styles.subsTabViewText}>
                            <Text style={styles.subsTabViewText1}>
                                Wet Pants 
                            </Text>

                            <Text style={styles.subsTabViewText2}>
                                9 August, 2019
                            </Text>
                        </View>
                        <View style={styles.subsTabViewPrice}>
                            <Text style={styles.subsTabViewPrice1}>
                                $10.30
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.subsTabViewMain}>
                    <View style={styles.subsTabView}>
                        <View style={styles.subsTabViewText}>
                            <Text style={styles.subsTabViewText1}>
                                My day with grandma 
                            </Text>

                            <Text style={styles.subsTabViewText2}>
                                9 August, 2019
                            </Text>
                        </View>
                        <View style={styles.subsTabViewPrice}>
                            <Text style={styles.subsTabViewPrice1}>
                                $9.70
                            </Text>
                        </View>
                    </View>
                </View>

                </ScrollView>
            </View>
        );
    }
}

export default TransactionHistory;

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
    txtView:{
        flex:1,
        flexDirection:'row'
    },
    txt1:{
        color:'#248fa5',
        marginTop:30,
        marginLeft:30,
        fontSize:15,
        
    },
    txtView1:{
        flex:3,
        color:'#248fa5',
        marginTop:30,
        marginLeft:30,
        fontSize:15,
    },
    txtView2:{
        flex:1,
        color:'#248fa5',
        marginTop:30,
        marginLeft:30,
        fontSize:15,
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
        fontSize:18,
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
        fontSize:30,
        fontWeight:'bold',
        color:'#7f1fe9'
    },
    totalContainer:{
        height:150,
        backgroundColor:'#268ea6',
        marginLeft:30,
        marginRight:30,
        marginTop:10,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    totalTxt1:{
       fontSize:40,
       fontWeight:'bold', 
       color:'#4ffd1c',
    },
    totalTxt2:{
       fontSize:18,
       fontWeight:'bold', 
       color:'white',
    },
    totalTxt3:{
        fontSize:15,
       fontWeight:'bold', 
        color:'#a8cbd7'
    }  
})

