import React from  'react';
import {View,Image,Text,TouchableOpacity,Linking} from 'react-native';
import { Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer';

import logImg from '../../assets/logo.png'

import styles from './styles'

export default function Detail(){
    const navigation = useNavigation();
    const message = "Hello APAD, I'm contacting you because I'd love to help in the case \"Running out of food\" with the price $120.00 "
    function navigateBack(){
        navigation.goBack();
    }
    function sendEmail(){
        MailComposer.composeAsync({
            subject: "The Hero's case: Running out of food",
            recipients: ['andrezaga9@hotmail.com'],
            body:message,
        })
    }
    function SendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=61406214503&text=${message}`);
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
                
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty,{marginTop:0}]}>NGO:</Text>
                <Text style={styles.incidentValue}>APAD</Text>
                    
                <Text style={styles.incidentProperty}>Case:</Text>
                <Text style={styles.incidentValue}>Running out of food</Text>

                <Text style={styles.incidentProperty}>Price:</Text>
                <Text style={styles.incidentValue}>$130.00</Text>

            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Save the day</Text>
                <Text style={styles.heroTitle}>Be a Hero of this case</Text>

                <Text style={styles.heroDescription}> Contact them:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={SendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}