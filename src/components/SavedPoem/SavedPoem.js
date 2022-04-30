import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const SavedPoem = ({ onPress, text, type, bgColor, textColor, imgSrc }) => {
    return (
        <View style={{overflow: 'hidden'}}>
            <View style={styles.container}>
                
                <Pressable height={90}
                    onPress={onPress} 
                    style={ ({ pressed }) => [
                        pressed ? { opacity: 0.8} : {},
                        [
                        styles.inner, 
                        styles[`container_${type}`],
                        bgColor ? {backgroundColor: bgColor} : {},
                    ]]}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={imgSrc} style={{width: 50, height: 50, borderRadius: 15, borderWidth: 1, borderColor: '#5E17EB'}}/>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={[
                                styles.text, 
                                styles[`container_${text}`],
                                textColor ? {color: textColor} : {}
                                ]}>{text}
                            </Text>
                            <Text style={{paddingLeft: 12, color: 'black', width: '90%'}}>Poem Sample text data goes here</Text>
                        </View>

                    </View>

                </Pressable>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        
    },
    container_PRIMARY: {
        width: '97%',
        marginTop:10,
        shadowOffset: {width: 1, height: 3},
        shadowColor: 'grey',
        shadowOpacity: 0.18,
        shadowRadius: 6,
        elevation: 5,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        borderRadius: 12,
        marginBottom: 10,
        padding: 18,
    },
    container_SECONDARY: {
        backgroundColor: 'white',
        marginTop: 10,
        borderColor: '#5E17EB',
        borderWidth: 2,
        borderRadius: 8,
    },
    container_TERTIARY: {
        marginTop: -5,
    },
    inner: {
        padding: 20,
        width: '80%'
        
        
    },
    text: {
        paddingLeft: 12,
        fontWeight: 'bold',
        color: 'black',
    },
    text_TERTIARY: {
        
    },
    
});

export default SavedPoem;