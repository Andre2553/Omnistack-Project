import React, { useEffect, useState } from  'react';
import {View,FlatList,Image,Text,TouchableOpacity} from 'react-native';
import { Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api'

import logImg from '../../assets/logo.png';

import styles from './styles'

export default function Incidents(){
    const navigation = useNavigation();
    
    const [incidents,setIncidents] = useState([]);
    const [total,setTotal] = useState(0);
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(false)

    function navigateToDetail(incident){
        navigation.navigate('Detail',{incident});
    }
    async function loadIncidents(){
        if(loading){
            return;
        }
        if(total>0 && incidents.length ===total){
            return;
        }
        setLoading(true);
        const response = await api.get('incidents',{
            params:{page}
        });

        setIncidents([...incidents,...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }
        
    
    useEffect(()=>{
        loadIncidents();
    },[])

    return(
        <View style={styles.container}> 
            <View style={styles.header}>
                <Image source={logImg}/>
                <Text style={styles.headerText}>
                   <Text style={styles.headerTextBold}>Cases Number: </Text>{total}
                </Text>
            </View>
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.description}>Choose any case and change the day of someone</Text>
            
            <FlatList
                keyExtractor={incident =>String(incident.id)}
                style={styles.incidentList}
                data={incidents}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item:incident})=>(
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>NGO:</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>
                    
                    <Text style={styles.incidentProperty}>Case:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>Price:</Text>
                    <Text style={styles.incidentValue}>{Intl.NumberFormat(
                        'eng-AU', {
                        style: 'currency', 
                        currency:'AUD'
                        }).format(incident.value)}
                    </Text>

                    <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={()=>navigateToDetail(incident)}
                    >
                        <Text style={styles.detailsButtonText}>More details</Text>
                        <Feather name = "arrow-right" size = {20} color ="#E02041"/>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    );
}