import React from  'react';
import {View,FlatList,Image,Text,TouchableOpacity} from 'react-native';
import { Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

import logImg from '../../assets/logo.png'

import styles from './styles'

export default function Incidents(){
    const navigation = useNavigation()

    function navigateToDetail(){
        navigation.navigate('Detail')
    }

    return(
        <View style={styles.container}> 
            <View style={styles.header}>
                <Image source={logImg}/>
                <Text style={styles.headerText}>
                   <Text style={styles.headerTextBold}>Cases Number: </Text>0
                </Text>
            </View>
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.description}>Choose any case and change the day of someone</Text>
            
            <FlatList
                keyExtractor={incident =>String(incident)}
                style={styles.incidentList}
                data={[1,2,3,4,5,6,7]}
                showsVerticalScrollIndicator={false}
                renderItem={()=>(
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>NGO:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>
                    
                    <Text style={styles.incidentProperty}>Case:</Text>
                    <Text style={styles.incidentValue}>Running out of food</Text>

                    <Text style={styles.incidentProperty}>Price:</Text>
                    <Text style={styles.incidentValue}>$130.00</Text>

                    <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={navigateToDetail}
                    >
                        <Text style={styles.detailsButtonText}>More details</Text>
                        <Feather name = "arrow-right" size = {16} color ="#E02041"/>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    );
}