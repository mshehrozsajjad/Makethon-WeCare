import React, { useState } from "react";
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
const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width;

const Result = ({ navigation }) => {
  const [criticalReport, setCriticalReport] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.mainLogo} source={require('../assets/img/logoSmall.png')} />
      </View>
      <View>
        <Text style={styles.mainHeading}>
          Your result is here:
        </Text>
      </View>
      <View style={criticalReport ? styles.reportViewCritical : styles.reportView}>
        <Text style={styles.reportText}>
          {/* The image analysis found no abnormalities on the patient. */}
          The image analysis has found characteristics of (disease) in the x-ray image.
        </Text>
      </View>
      {criticalReport ?
        <View>
          <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.buttonText}> Contact Now </Text>
          </TouchableOpacity>
        </View>
        : null}
      <View>
        <TouchableOpacity style={criticalReport ? styles.outlineButton : styles.mainButton}>
          <Text style={criticalReport ? styles.outlineButtonText : styles.buttonText}> Scan Again </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
  },
  mainLogo: {
    width: ITEM_WIDTH * 0.45,
    resizeMode: 'contain',
    marginBottom: height * 0.1,
  },
  image: {
    width: ITEM_WIDTH * 0.75,
    height: height * 0.4,
    borderRadius: 20,
  },
  mainHeading: {
    textAlign: 'center',
    color: '#313131',
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: 'bold',
    fontSize: 31,
    width: ITEM_WIDTH * 0.75,
    marginBottom: height * 0.07,
  },
  reportView: {
    width: ITEM_WIDTH * 0.75,
    // height: height * 0.3,
    // border: '3px solid #4A65AD',
    borderWidth: 3,
    borderColor: '#4A65AD',
    borderStyle: 'solid',
    borderRadius: 20,
    justifyContent: 'center',
  },
  reportViewCritical: {
    width: ITEM_WIDTH * 0.75,
    // height: height * 0.3,
    // border: '3px solid #4A65AD',
    borderWidth: 3,
    borderColor: '#E22A2A',
    borderStyle: 'solid',
    borderRadius: 20,
    justifyContent: 'center',
  },
  reportText: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#313131',
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
  },
  mainButton: {
    backgroundColor: '#4A65AD',
    borderRadius: 20,
    width: ITEM_WIDTH * 0.75,
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.065,
    elevation: 2.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
  },
  outlineButton: {
    backgroundColor: '#fff',
    borderColor: '#4A65AD',
    borderWidth: 2,
    borderRadius: 20,
    width: ITEM_WIDTH * 0.75,
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
    elevation: 2.5,
  },
  outlineButtonText: {
    color: '#4A65AD',
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
  },
}

export default Result