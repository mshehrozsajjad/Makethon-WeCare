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
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import Axios from 'axios';
const baseurl = 'https://7a9b435a.ngrok.io'; // url/ip address of your server
const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width;

const UploadImage = ({ navigation }) => {
    const [uploading, setUploading] = useState(false) // flag to check if an upload is in progress
    const [uploadProgress, setUploadProgress] = useState(0) // track the progress of upload
    const [image, setImage] = useState('') // image selected by user, will have the uri to use to show in image component
    const [errmsg, setErrmsg] = useState('') // to show any error occured
    const [filename, setFilename] = useState('') // filename of image after uploaded to server

    const handleChooseImage = () => {
        ImagePicker.showImagePicker(
            {
                title: 'Select Profile Picture',
                storageOptions: {
                    path: 'images',
                    cameraRoll: true,
                    privateDirectory: true,
                },
            },
            (response) => {
                if (response.error || response.didCancel) {
                    setErrmsg('Could not choose image')
                } else {
                    ImageResizer.createResizedImage(
                        response.uri,
                        512, // width of the resized image
                        512, // height of the resized image
                        'JPEG', // type of image
                        100, // quality parameter
                    )
                        .then((result) => {
                            setImage(result)
                            handleUpload()
                        })
                        .catch((error) => {
                            setErrmsg('Could not choose image' + error.message)
                        });
                }
            },
        );
    }
    const handleUpload = async () => {
        setUploading(true)
        setErrmsg('')
        setFilename('')
        setUploadProgress(0)
        const payload = new FormData();
        payload.append('profilepic', {
            uri: image.url,
            type: 'image/JPEG',
            name: image.name,
        });
        await Axios.post(`${baseurl}/pictures/profile`, payload, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progress) => {
                const { loaded, total } = progress;
                const percentageProgress = Math.floor((loaded / total) * 100);
                setUploadProgress(percentageProgress)
            },
        })
            .then((result) => {
                if (result.status === 200 && result.data.success) {
                    console.log(result.data);
                    setUploading(false)
                    setUploadProgress(0)
                    setFilename(result.data.data.filename)
                    setErrmsg('')
                } else {
                    throw new Error(result.status + ': ' + result.statusText);
                }
            })
            .catch((error) => {
                console.log(error.message);
                setUploading(false)
                setErrmsg(error.message)
                setUploadProgress(0)
                setFilename('')
            });
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.mainLogo} source={require('../assets/img/logoSmall.png')} />
            </View>
            <View>
                <Text style={styles.mainHeading}>
                    Please take a picture of your chest x-ray to proceed
                </Text>
            </View>
            <View style={{ position: 'relative' }}>
                <Image
                    style={styles.image}
                    source={
                        image
                            ? { uri: image.uri }
                            : require('../assets/img/placeholder.png')
                    }
                />
                <TouchableOpacity
                    style={styles.uploadButton}
                    disabled={uploading}
                    onPress={() => handleChooseImage()}
                >
                    <Text style={styles.uploadButtonText}> Choose Image </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.mainButton}>
                    <Text style={styles.buttonText}> Get Results </Text>
                </TouchableOpacity>
            </View>


            <View style={{ alignItems: 'center' }}>
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
        marginBottom: height * 0.075,
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
        fontSize: 22,
        width: ITEM_WIDTH * 0.75,
        marginBottom: height * 0.07,
    },
    uploadButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: ITEM_WIDTH * 0.45,
        height: height * 0.065,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.03,
        position: "absolute",
        left: ITEM_WIDTH * 0.15,
        bottom: height * -0.06,
        elevation: 4,
    },
    uploadButtonText: {
        color: '#4A65AD',
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
    },
    mainButton: {
        backgroundColor: '#4A65AD',
        borderRadius: 20,
        width: ITEM_WIDTH * 0.75,
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.06,
        elevation: 4,
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
    },
}

export default UploadImage
// import React, { useState } from "react";
// import {
//     View,
//     Text,
//     StatusBar,
//     Image,
//     TouchableOpacity,
//     Clipboard,
// } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import ImageResizer from 'react-native-image-resizer';
// import Axios from 'axios';
// const baseurl = 'https://7a9b435a.ngrok.io'; // url/ip address of your server

// const UploadImage = ({ navigation }) => {
//     const [uploading, setUploading] = useState(false) // flag to check if an upload is in progress
//     const [uploadProgress, setUploadProgress] = useState(0) // track the progress of upload
//     const [image, setImage] = useState('') // image selected by user, will have the uri to use to show in image component
//     const [errmsg, setErrmsg] = useState('') // to show any error occured
//     const [filename, setFilename] = useState('') // filename of image after uploaded to server

//     const handleChooseImage = () => {
//         ImagePicker.showImagePicker(
//             {
//                 title: 'Select Profile Picture',
//                 storageOptions: {
//                     path: 'images',
//                     cameraRoll: true,
//                     privateDirectory: true,
//                 },
//             },
//             (response) => {
//                 if (response.error || response.didCancel) {
//                     setErrmsg('Could not choose image')
//                 } else {
//                     ImageResizer.createResizedImage(
//                         response.uri,
//                         512, // width of the resized image
//                         512, // height of the resized image
//                         'JPEG', // type of image
//                         100, // quality parameter
//                     )
//                         .then((result) => {
//                             setImage(result)
//                         })
//                         .catch((error) => {
//                             setErrmsg('Could not choose image' + error.message)
//                         });
//                 }
//             },
//         );
//     }
//     const handleUpload = async () => {
//         setUploading(true)
//         setErrmsg('')
//         setFilename('')
//         setUploadProgress(0)
//         const payload = new FormData();
//         payload.append('profilepic', {
//             uri: image.url,
//             type: 'image/JPEG',
//             name: image.name,
//         });
//         await Axios.post(`${baseurl}/pictures/profile`, payload, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//             onUploadProgress: (progress) => {
//                 const { loaded, total } = progress;
//                 const percentageProgress = Math.floor((loaded / total) * 100);
//                 setUploadProgress(percentageProgress)
//             },
//         })
//             .then((result) => {
//                 if (result.status === 200 && result.data.success) {
//                     console.log(result.data);
//                     setUploading(false)
//                     setUploadProgress(0)
//                     setFilename(result.data.data.filename)
//                     setErrmsg('')
//                 } else {
//                     throw new Error(result.status + ': ' + result.statusText);
//                 }
//             })
//             .catch((error) => {
//                 console.log(error.message);
//                 setUploading(false)
//                 setErrmsg(error.message)
//                 setUploadProgress(0)
//                 setFilename('')
//             });
//     }
//     return (
//         <>
//             <StatusBar barStyle="dark-content" backgroundColor={'white'} />
//             <View
//                 style={styles.headerBar}>
//                 <Text style={{ fontSize: 22, fontWeight: '600' }}>
//                     Image Upload App
//                 </Text>
//             </View>
//             <View style={{ alignItems: 'center' }}>
//                 <View style={{ elevation: 5, padding: 10 }}>
//                     <Image
//                         style={styles.image}
//                         source={
//                             image
//                                 ? { uri: image.uri }
//                                 : require('../assets/img/profilepic.jpg')
//                         }
//                     />
//                 </View>
//                 <TouchableOpacity
//                     style={styles.button}
//                     disabled={uploading}
//                     onPress={() => handleChooseImage}>
//                     <Text> Choose Image </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={styles.button}
//                     disabled={uploading || !image}
//                     onPress={() => handleUpload}>
//                     <Text> {uploading ? 'Uploading' : 'Upload Image'} </Text>
//                 </TouchableOpacity>
//                 <Text
//                     style={{
//                         display: uploading ? 'flex' : 'none',
//                         fontSize: 16,
//                     }}>
//                     Progress: {uploadProgress + '%'}
//                 </Text>
//                 <Text
//                     style={{
//                         display: filename ? 'flex' : 'none',
//                         fontSize: 16,
//                     }}
//                     onPress={() => {
//                         Clipboard.setString(filename);
//                     }}>
//                     Filename: {'\n' + filename}
//                 </Text>
//             </View>
//         </>
//     )
// }

// const styles = {
//     image: {
//         width: 200,
//         height: 200,
//         borderRadius: 100,
//         borderWidth: 2,
//     },
//     button: {
//         elevation: 2,
//         padding: 15,
//         borderRadius: 10,
//         backgroundColor: 'white',
//         marginVertical: 5,
//     },
//     headerBar: {
//         elevation: 4,
//         paddingVertical: 15,
//         backgroundColor: 'white',
//         paddingHorizontal: 10,
//         marginBottom: 20,
//     },
// };

// export default UploadImage