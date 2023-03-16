import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import EpisodeCard from './components/EpisodeCard';
import { useNavigation } from '@react-navigation/native';


export default function ListView() {

    const navigation = useNavigation();

    const [datas, setDatas] = useState([]);

    const getDatas = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        if (data) {
            setDatas(data.results);
        }
    }

    useEffect(() => {
        getDatas();
    }, []);

    const navigateTo = () => {
        navigation.navigate('Form');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rick Api Mobile </Text>
            <Button title="Go to Form" onPress={() => navigation.navigate('Form')} />
            <ScrollView style={styles.scrollView} horizontal={true}>
                {datas.map((data, index) => {
                    return (
                        <View key={index} style={styles.card}>
                            <View style={{ flexDirection: 'row', marginTop: 1 }}>
                                <Image source={{ uri: data.image }} style={{ width: 150, height: 150, borderRadius: 10 }} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.personage}>{data.name}</Text>
                                    <Text style={styles.personage}>{data.species} - {data.status} - {data.gender}</Text>
                                    <Text style={styles.personage}>{data.origin.name}</Text>
                                    <Text style={styles.personage}>{data.location.name}</Text>
                                </View>
                            </View>
                            <View style={{ height: 1, backgroundColor: 'black', margin: 10 }} />
                            <Text>Played in {data.episode.length} episodes:</Text>
                            {data.episode.map((episode, index) => {
                                return (
                                    <EpisodeCard key={index} props={episode} />
                                )
                            })}



                        </View>
                    )
                })}
            </ScrollView>
            <StatusBar style="auto" />
            
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center'
        justifyContent: 'center',
        
    },
    title: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        margin: 10
    },
    scrollView: {
        //backgroundColor: 'blu',
        marginHorizontal: 5,
        marginBottom: 30
        //hauteur de la scrollview
    },
    card: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    personage: {
        fontSize: 20,
        color: 'black',
        textAlign: 'left',
        margin: 2
    },
    button: {
        backgroundColor: 'red',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

});
