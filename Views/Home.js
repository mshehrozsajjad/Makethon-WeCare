import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Clipboard,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import logo from '../assets/img/logo.png'

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width;
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.mainLogo} source={logo} />
      </View>
      <View>
        <Text style={styles.mainHeading}>
          Welcome to the leap-forward in medical imaging !
        </Text>
      </View>
      <View>
        <Text style={styles.mainText}>
          Get fast and accurate diagnosis in seconds using our A.I algorithms.
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('ChooseType')} >
          <Text style={styles.buttonText}> Continue </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  mainLogo: {
    // backgroundColor: 'red',
    width: ITEM_WIDTH * 0.75,
    resizeMode: 'contain',
    marginBottom: height * 0.05
  },
  mainHeading: {
    color: '#313131',
    // fontFamily: 'MontserratBlack',
    fontWeight: 'bold',
    fontSize: 22,
    width: ITEM_WIDTH * 0.75,
    marginBottom: height * 0.05
  },
  mainText: {
    color: '#313131',
    // fontFamily: 'MontserratMedium',
    fontSize: 22,
    width: ITEM_WIDTH * 0.75,
    marginBottom: height * 0.09
  },
  mainButton: {
    backgroundColor: '#4A65AD',
    borderRadius: 20,
    boxShadow: '0px 4px 15px #00000024',
    width: ITEM_WIDTH * 0.75,
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    // fontFamily: 'MontserratMedium',
    fontSize: 18,
  }
}

export default Home;
