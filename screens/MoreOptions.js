import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import DeleteAccount from '../modal/DeleteAccount'


class MoreOptions extends Component {

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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>

          <TouchableOpacity 
          onPress={() => this.props.navigation.push('Home')}
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
              More options
                        </Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.contentContainer}>

          <TouchableOpacity
          onPress={() => this.props.navigation.push('ParentDashboard')}
           style={[styles.optionsTanView, { marginTop: 40 }]}>
            <View style={styles.optionsTanView1}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2090a2', marginLeft: 20, }}>
                Parent Dashboard
              </Text>

            </View>
            <TouchableOpacity style={styles.optionsTanView2}>
              <View >
                <Image
                  style={{ height: 16, width: 11, }}
                  source={require('../src/More.png')}
                />
              </View>
            </TouchableOpacity>


          </TouchableOpacity>

          <Text style={{ fontSize: 15, color: '#2090a2', marginLeft: 20, marginTop: 30, }}>
            TRANSACTIONS
                  </Text>

          <TouchableOpacity style={[styles.optionsTanView, { marginTop: 15, }]}
          onPress={() => this.props.navigation.push('TransactionHistory')}
          >
            <View style={styles.optionsTanView1}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2090a2', marginLeft: 20, }}>
                Transaction history
                    </Text>

            </View>
            <TouchableOpacity style={styles.optionsTanView2}>
              <View >
                <Image
                  style={{ height: 16, width: 11, }}
                  source={require('../src/More.png')}
                />
              </View>
            </TouchableOpacity>

          </TouchableOpacity>

          <Text style={{ fontSize: 15, color: '#2090a2', marginLeft: 20, marginTop: 20, }}>
            APPLICATION
                  </Text>

          <View style={[styles.optionsTanView, { marginTop: 15, }]}>
            <TouchableOpacity style={styles.optionsTanView2}>

              <View >
                <Image
                  style={{ height: 23, width: 26, }}
                  source={require('../src/Share.png')}

                />

              </View>
            </TouchableOpacity>
            <View style={styles.optionsTanView1}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2090a2', marginLeft: 20, }}>

                Share on Social media

                    </Text>

            </View>
            <TouchableOpacity style={styles.optionsTanView2}>

              <View >
                <Image
                  style={{ height: 16, width: 11, }}
                  source={require('../src/More.png')}

                />

              </View>
            </TouchableOpacity>


          </View>

          <TouchableOpacity 
          onPress={() => this.props.navigation.push('Settings')}
          style={[styles.optionsTanView, { marginTop: 2, }]}>
            <TouchableOpacity style={styles.optionsTanView2}>

              <View >
                <Image
                  style={{ height: 25, width: 25, }}
                  source={require('../src/Settings.png')}

                />

              </View>
            </TouchableOpacity>

            <View style={styles.optionsTanView1}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2090a2', marginLeft: 20, }}>

                Account Settings

                    </Text>

            </View>
            <TouchableOpacity style={styles.optionsTanView2}>

              <View >
                <Image
                  style={{ height: 16, width: 11, }}
                  source={require('../src/More.png')}

                />

              </View>
            </TouchableOpacity>


          </TouchableOpacity>

          <Text style={{ fontSize: 15, color: '#2090a2', marginLeft: 20, marginTop: 20, }}>
            SUPPORT
                  </Text>

          <View style={[styles.optionsTanView, { marginTop: 15, }]}>

            <View style={styles.optionsTanView1}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2090a2', marginLeft: 20, }}>

                Terms of use

                    </Text>

            </View>
            <TouchableOpacity style={styles.optionsTanView2}>

              <View >
                <Image
                  style={{ height: 16, width: 11, }}
                  source={require('../src/More.png')}

                />

              </View>
            </TouchableOpacity>


          </View>

          <View style={[styles.optionsTanView, { marginTop: 2, }]}>




            <View style={styles.optionsTanView1}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2090a2', marginLeft: 20, }}>

                Privacy Policy

                    </Text>

            </View>
            <TouchableOpacity style={styles.optionsTanView2}>

              <View >
                <Image
                  style={{ height: 16, width: 11, }}
                  source={require('../src/More.png')}

                />

              </View>
            </TouchableOpacity>


          </View>
          <View style={{ height: 130, alignItems: 'center', justifyContent: 'center' }}>

            <TouchableOpacity
            onPress={() => this.changeModalVisibility(true) }
              style={{}}
            >
              <Image
                style={{ height: 50, width: 300, borderRadius: 30, }}
                source={require('../src/Deletemyacnt.png')}
              />
            </TouchableOpacity>
            <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}
               animationType='fade'>
                    <DeleteAccount changeModalVisibility={this.changeModalVisibility } setData={this.setData} />
               </Modal>

          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MoreOptions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8f8f9',
    flex: 1,
  },
  optionsTanView: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  optionsTanView1: {
    flex: 5,
    justifyContent: 'center',
  },
  optionsTanView2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    height: 70,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row'
  },
  titleBackView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleBack: {
    height: 25,
    width: 25,
  },
  titleTextView: {
    flex: 4,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#248fa5',
    marginLeft: 40,
  },
})


