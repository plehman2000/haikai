import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, Alert, Dimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import GoogleButton from '../../components/GoogleButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import TextLogo from '../../../assets/images/pindartext.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify'
import BottomWave from '../../components/BottomWave';
import TopWave from '../../components/TopWave';

const windowHeight = Dimensions.get('window').height;


const ConfirmEmailScreen = () => {
    const route = useRoute();
    const {control, handleSubmit, watch} = useForm({defaultValues: {username: route?.params?.username}});

    const username = watch('username');

    const navigation = useNavigation();

    const onConfirmPressed = async (data) => {
        try {
            await Auth.confirmSignUp(data.username, data.code);
            
            navigation.navigate('SignIn');
        } catch (e) {
            Alert.alert("Oops", e.message);
        }


        //console.warn("confirm");
        //navigation.navigate('Home');
    };

    const onResendPressed = async () => {
        try {
            await Auth.resendSignUp(username);
            Alert.alert("Success", 'A new confirmation code was sent to your email');
        } catch (e) {
            Alert.alert("Oops", e.message);
        }
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    const {height} = useWindowDimensions();
    
    
    return (

        <View style={styles.maincontainer}>

        <TopWave/>


        <View style={styles.root}>
            
            <Image source={TextLogo} style={[styles.logo, {height: height * 0.12}]} resizeMode="contain" />
            <Text style={styles.title}>Confirm your Email</Text>

            <CustomInput name="username" control={control} placeholder="Username &#9;&#9;&#9;&#9;&#9;"  icon={faUser} rules={{ required: 'Username is required' }}/>
            <CustomInput name="code" control={control} placeholder="Enter confirmation code * &#9;&#9;&#9;&#9;&#9;"  icon={faCircleExclamation} rules={{ required: 'Confirmation code is required' }}/>
                
            
            <CustomButton  text="Confirm" onPress={handleSubmit(onConfirmPressed)} type="PRIMARY"/>
            
            
            <CustomButton  
                text="Resend code" 
                onPress={onResendPressed}
                type="PRIMARY" 
                textColor='white'
                />

            <CustomButton  
                text="Back to Sign in" 
                onPress={onSignInPressed}
                type="SECONDARY" 
                textColor='#5E17EB'
                />
        
        </View>
        <BottomWave />
        </View>


    );
};

const styles = StyleSheet.create({
    root: {
        height: windowHeight - 100,
        marginTop: 100,
        backgroundColor: '#d6d7ff',
    },
    logo: {
        width: '100%',
        maxWidth: 500,
        maxHeight: 480,
    },
    title: {
        
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4700d4',
        margin: 10,
        alignSelf: 'center'
    },
    maincontainer: {
        backgroundColor: '#d6d7ff',
    }
})

export default ConfirmEmailScreen