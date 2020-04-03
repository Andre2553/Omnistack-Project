import React from  'react';
import {View,Image,Text,TouchableOpacity,Linking} from 'react-native';
import { Feather} from '@expo/vector-icons';
import {useNavigation,useRoute} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer';

import logImg from '../../assets/logo.png'

import styles from './styles'

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();
    
    const incident = route.params.incident;
    const message = `Hello ${incident.name}, I'm contacting you because I'd love to help in the case \"${incident.title}\" with the price ${Intl.NumberFormat('eng-AU', {style: 'currency', currency:'AUD'}).format(incident.value)}`
    function navigateBack(){
        navigation.goBack();
    }
    function sendEmail(){
        MailComposer.composeAsync({
            subject: `The Hero's case: ${incident.title}`,
            recipients: [incident.email],
            body:message,
        })
    }
    function SendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
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
                <Text style={styles.incidentValue}>{incident.name} from {incident.city} - {incident.uf}</Text>
                    
                <Text style={styles.incidentProperty}>Case:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Price:</Text>
                <Text style={styles.incidentValue}>{
                    Intl.NumberFormat('eng-AU', {
                        style: 'currency', 
                        currency:'AUD'
                        }).format(incident.value)}
                </Text>

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