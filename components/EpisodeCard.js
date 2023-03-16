import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


export default function EposodeCard({props})  {

    const [episodes, setEpisodes] = useState([]);


    const getEpisodes = async () => {
        const response = await fetch(props);
        const data = await response.json();
        if (data) {
            setEpisodes(data);
        }
    }

    useEffect(() => {
        getEpisodes();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{episodes.episode} - {episodes.name}</Text>
        </View>
    );



}
const styles = StyleSheet.create({
    container: {
        /* flex: 1, */
        backgroundColor: '#fff',
        alignItems: 'left',
        marginTop : 10,
        marginBottom : 10,
    },
    title: {
        fontSize: 15,
        fontWeight: 'normal',
        flexWrap: 'wrap',
    },
    scrollView: {
        marginHorizontal: 20,
    },
});
