import { StyleSheet, Text, View, Button, ScrollView, Image, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';


export default function Form() {

    const [name, setName] = useState({
        lastname: '',
        firstname: '',
    });

    const handleName = (text) => {
        setName(text);
        console.log(name);
    }

    const submit = (name) => {
        alert('Name: ' + name.lastname + ' ' + name.firstname); 
    }

    return (

        <View style={styles.container}>
            <Text>Form</Text>
            {/* <TextInput style={styles.input} onChangeText={handleName} value={name} /> */}
            <TextInput style={styles.input} onChangeText={(text) => setName({ ...name, lastname: text })} />    
            <TextInput style={styles.input} 
            onChangeText={(text) => setName({ ...name, firstname: text})} />
            <Button title="Submit" onPress={() => submit(name)} />
            <Text>{JSON.stringify(name)}</Text>
            <Text>{name.lastname}</Text>
            <Text>{name.firstname}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input : {
        height: 80,
        width: 200,
        margin: 12,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
});
