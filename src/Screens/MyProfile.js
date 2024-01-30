import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGetUserLocationQuery } from '../app/sevices/shopServices';
import { useSelector } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import LogoutIcon from '../../assets/logout-icon.png';
import { deleteAllSession } from '../database';


const MyProfile = ({ navigation }) => {

    const dispatch = useDispatch();
    const localId = useSelector(state => state.auth.value.localId);
    const { data } = useGetUserLocationQuery(localId);
    const onLogout = () =>{
        deleteAllSession();
        dispatch(clearUser());

    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{data?.address}</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Address")}>
                <Text style={styles.buttonText}>{data?.address ? "Change Address" : "Set Address"}</Text>
            </Pressable>
            <Pressable style={styles.logoutButton} onPress={onLogout}>
                <Text style={styles.buttonText}>Log Out!</Text>
                <Image source={LogoutIcon} style={styles.logoutIcon} />
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
    },
    text: {
        width: "70%",
        textAlign: 'center',
        fontSize: 16
    },
    logoutButton: {
        backgroundColor: '#e74c3c', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c0392b', 
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row', 
        width: '60%',
        gap:20
      },
      logoutIcon: {
        width: 20,
        height: 20,
        tintColor: '#fff', 
      },
})