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

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width;
const ChooseType = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.mainLogo} source={require('../assets/img/logo.png')} />
            </View>
            <View>
                <Text style={styles.mainHeading}>
                    Please select one of the following
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.mainButton}>
                    <Text style={styles.buttonText}> X-Ray </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity activeOpacity={1} style={styles.disabledButton}>
                    <Text style={styles.buttonText}> Knee MRI </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity activeOpacity={1} style={styles.disabledButton}>
                    <Text style={styles.buttonText}> Skull C.T </Text>
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
        width: ITEM_WIDTH * 0.75,
        resizeMode: 'contain',
        marginBottom: height * 0.02
    },
    mainHeading: {
        textAlign: 'center',
        color: '#313131',
        fontFamily: 'Montserrat-ExtraBold',
        fontWeight: 'bold',
        fontSize: 28,
        width: ITEM_WIDTH * 0.75,
        marginBottom: height * 0.1,
    },
    mainButton: {
        backgroundColor: '#4A65AD',
        borderRadius: 20,
        boxShadow: '0px 4px 15px #00000024',
        width: ITEM_WIDTH * 0.75,
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.03,
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
    },
    disabledButton: {
        backgroundColor: '#939393',
        borderRadius: 20,
        boxShadow: '0px 4px 15px #00000024',
        width: ITEM_WIDTH * 0.75,
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.03,
    },
}

export default ChooseType;
