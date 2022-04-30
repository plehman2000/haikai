
import React, {useState, useEffect} from 'react';
import { View, Text, Platform, Button, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function DetailsScreen({navigation}) {
    
    const [image, setImage] = useState(null);
    const [productImage, setProductImage] = useState(null);
    const [selectProductImage, setSelectProductImage] = useState(null);
    const [virtualWarpScreen, setVirtualWarpScreen] = useState(null);
    const [warpClothing, setWarpClothing] = useState(null);

    useEffect( async () => {
        
    }, [])

    useEffect( async () => {
        
    })
    
    const NewPhoto = () => {
        setImage(null);
        console.log("New Photo pressed");
    }

    const SelectProduct = () => {
        setSelectProductImage(true);
    }

    const WarpScreenDisplay = () => {
        setVirtualWarpScreen(true);
    }

    const ResetPath = () => {
        setVirtualWarpScreen(null);
        setSelectProductImage(null);
        setImage(null);
        setProductImage(null);
    }

    const TakeImage = async () => {
        if (Platform.OS !== 'web') {
           const {status} =  await ImagePicker.requestCameraPermissionsAsync();
            if (status.granted === false) {
                alert('Please enable Pindar Camera Permission in Settings')
            }
        }
        let result = await ImagePicker.launchCameraAsync( {
            quality: 1,
            base64: true,
            allowsEditing: true,
        })
        console.log(result)
        if (!result.cancelled) {
            setImage(result.uri)
            console.log(result.base64)
        }
    }

    const TakeProductImage = async () => {
        if (Platform.OS !== 'web') {
           const {status} =  await ImagePicker.requestCameraPermissionsAsync();
            if (status.granted === false) {
                alert('Please enable Pindar Camera Permission in Settings')
            }
        }
        let result = await ImagePicker.launchCameraAsync( {
            quality: 1,
            base64: true,
            allowsEditing: true,
        })
        console.log(result)
        if (!result.cancelled) {
            setProductImage(result.uri)
            console.log(result.base64)
        }
    }

    const PickImage = async () => {
        if (Platform.OS !== 'web') {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Please enable Pindar Photos Permission in Settings')
            }
        }
        let result = await ImagePicker.launchImageLibraryAsync( {
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
            base64: true
        })
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri)
            console.log(result.base64)
        }
    }
    const PickProductImage = async () => {
        if (Platform.OS !== 'web') {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Please enable Pindar Photos Permission in Settings')
            }
        }
        let result = await ImagePicker.launchImageLibraryAsync( {
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
            base64: true
        })
        console.log(result);
        if (!result.cancelled) {
            setProductImage(result.uri)
            console.log(result.base64)
        }
    }

    const WarpClothing = () => {
        setWarpClothing(true);
    }

    return (
        

        <View 
        noShadow={true}
        style={{shadowOpacity: 0, shadowColor: 'transparent',elevation:0, backgroundColor: 'black', borderColor: 'black', borderWidth:10, borderRadius: 0, flex: 1, justifyContent: 'center'}}>
            
           
            <View noShadow={true} style={{ borderWidth: 1, borderColor: 'black', height: 800,shadowColor: 'transparent',elevation:0, borderRadius: 20,
                    shadowOpacity: 0,
                    backgroundColor: '#f0f0f0',flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                {!image &&
                <Text
                    onPress={() => alert('This is the "Home" screen.')}
                    style={{ fontSize: 26, fontWeight: 'bold', color: '#5E17EB'}}>
                        Upload a Photo Pose
                        
                </Text>}

                

                {image && !selectProductImage && <Image source={{uri:image}} style={{width: 260, height: 260, borderRadius: 30, borderWidth: 3, borderColor: '#5E17EB'}}/>}
                {!image && !selectProductImage && <CustomButton  text={"Take Photo"} onPress={TakeImage} type="PRIMARY"/>}
                {!image && !selectProductImage && <CustomButton  text={"Choose from Library"} onPress={PickImage} type="PRIMARY"/>}
                {image && !selectProductImage && <CustomButton  text={"Warp a Clothing Product"} onPress={SelectProduct} type="PRIMARY"/>}
                {image && !selectProductImage && <CustomButton  text={"New Photo Upload"} onPress={NewPhoto} type="PRIMARY"/>}
                
                {image && selectProductImage && productImage && !virtualWarpScreen && <Image source={{uri:productImage}} style={{width: 260, height: 260, borderRadius: 30, borderWidth: 3, borderColor: '#5E17EB'}}/>}
                {image && selectProductImage && !virtualWarpScreen && <CustomButton  text={"Choose Product Image"} onPress={PickProductImage} type="PRIMARY"/>}
                {image && selectProductImage && !virtualWarpScreen && productImage && <CustomButton  text={"Proceed to Virtual Warp"} onPress={WarpScreenDisplay} type="PRIMARY"/>}

                {image && selectProductImage && productImage && virtualWarpScreen && <Image source={{uri:productImage}} style={{width: 170, height: 170, borderRadius: 30, borderWidth: 3, borderColor: '#5E17EB'}}/>}
                {image && selectProductImage && productImage && virtualWarpScreen && <Image source={{uri:image}} style={{width: 170, height: 170, borderRadius: 30, borderWidth: 3, borderColor: '#5E17EB'}}/>}
                {image && selectProductImage && productImage && virtualWarpScreen && <CustomButton  text={"Warp Clothing to Pose"} onPress={WarpClothing} type="PRIMARY"/>}
                {image && selectProductImage && productImage && virtualWarpScreen && <CustomButton  text={"Reset Selections"} onPress={ResetPath} type="PRIMARY"/>}

                
                
            </View>
            
        </View>
    );
}