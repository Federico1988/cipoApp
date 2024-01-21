import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGetUserLocationQuery } from '../app/sevices/shopServices';
import { useSelector } from 'react-redux';

const MyProfile = ({navigation}) => {
    
    const localId = useSelector(state => state.auth.value.localId);
    const {data}= useGetUserLocationQuery(localId);

    return (
        <View style={styles.container}>
            <Text>{data?.location?.address}</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Address")}>
                <Text style={styles.buttonText}>Set address</Text>
            </Pressable>
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 80,
        gap: 20
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2980b9',
        alignItems: 'center',
        justifyContent: 'center',
        width: "60%"
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    }
})