import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import SavedPoem from '../../components/SavedPoem';
import { Linking } from "react-native";


export default function MainScreen({navigation}) {
    
    return (

        
            <View 
            noShadow={true}
            style={{shadowOpacity: 0, shadowColor: 'transparent',elevation:0, backgroundColor: 'white', borderColor: 'white', borderWidth:10, borderRadius: 0, flex: 1,  height: 800}}>
                
            
                <View noShadow={false} style={{ borderWidth: 1, borderColor: 'white', shadowColor: 'grey',elevation:0, borderRadius: 20, alignItems: 'center',
                    shadowOpacity: 0,
                    backgroundColor: 'white',flex: 1, alignItems: 'center'}}>
                    
                    <View style={{backgroundColor: '#f1f0f5', width: 350, borderRadius: 12, marginTop: 20, paddingVertical: 30, paddingHorizontal: 25, alignItems: 'center'}}>
                        <Text
                            style={{ fontFamily: 'Trebuchet MS', fontSize: 26, fontWeight: 'bold', paddingBottom: 15}}>
                                What is Haikai?
                        </Text>
                        <Text style={{fontSize: 15, textAlign: 'center', fontFamily: 'Trebuchet MS', color: '#4d4d4d', paddingBottom: 10}}>Haikai is a mobile appliction that allows users to generate artificial Haiku Poems about an image they upload.</Text>
                        <CustomButton onPress={()=>{ Linking.openURL('https://github.com/')}} text="Learn More" type="PRIMARY"/>
                    </View>
                    

                    
                </View>
                <View noShadow={false} style={{ borderWidth: 1, borderColor: 'white', shadowColor: 'grey',elevation:0, borderRadius: 20, alignItems: 'left',
                    shadowOpacity: 0,
                    backgroundColor: 'white', flex: 1, marginTop: -120, paddingLeft: 15}}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', paddingBottom: 5}}>My Poems</Text>
                    <ScrollView bounces={false} horizontal={false} width='100%' >
                    <SavedPoem text="Poem1" type="PRIMARY" imgSrc={require('../../../assets/images/dog.png')}/>
                    <SavedPoem text="Poem2" type="PRIMARY" imgSrc={require('../../../assets/images/cat.png')}/>
                    <SavedPoem text="Poem3" type="PRIMARY" imgSrc={require('../../../assets/images/flower.png')}/>
                    <SavedPoem text="Poem1" type="PRIMARY" imgSrc={require('../../../assets/images/dog.png')}/>
                    
                    <Text> </Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    <Text>Oops! You don't have any Haiku Po</Text>
                    
                    </ScrollView>
                </View>
                
                
            </View>
       
    );
}