import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import MapPreview from '../Components/MapPreview';
import { googleApi } from '../firebase/googleApi';
import { usePostUserLocationMutation } from '../app/sevices/shopServices';
import { useSelector } from 'react-redux';

const LocationSelector = ({ navigation }) => {
    const localId = useSelector(state => state.auth.value.localId);
    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const [address, setAddress] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(true);
    const [triggerPostUserLocation, { data, isSuccess, isError, error }] = usePostUserLocationMutation();

    useEffect(() => {
        //if (isSuccess) console.log(data);
        if (isError) console.log(error);

    }, [data, isSuccess, isError, error])

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permimssion denied');
                setLoading(false);
                return;
            }
            let deviceLocation = await Location.getCurrentPositionAsync({})
            setLocation({
                latitude: deviceLocation.coords.latitude,
                longitude: deviceLocation.coords.longitude
            })
        })()
    }, []);

    useEffect(() => {
        (async () => {
            try {
                if (location.latitude) {
                    const latLng = `${encodeURIComponent(location.latitude)},${encodeURIComponent(location.longitude)}`;
                    const addressResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng}&key=${googleApi.mapStatic}`);
                    const address = await addressResponse.json();
                    setAddress(address.results[0].formatted_address);
                    setLoading(false);
                }
            }
            catch (error) {
                setErrorMsg(error.message);
                setLoading(false);
            }
        })()

    }, [location]);

    const onConfirmAddress = async () => {
        try {
            const locationFormatted = {
                address,
                ...location
            }
            const data = await triggerPostUserLocation({ localId, locationFormatted });
            console.log(data);

            navigation.goBack();

        } catch (error) {
            setErrorMsg(error.message);
        }
    }


    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#3498db" style={styles.loadingIndicator} />
            ) : (
                <>
                    <Text style={styles.text}>{errorMsg ? errorMsg : address}</Text>
                    <MapPreview latitude={location.latitude} longitude={location.longitude} />
                    <Pressable
                        style={[styles.button, errorMsg && styles.disabledButton]} // Apply additional styles for the disabled state
                        onPress={onConfirmAddress}
                        disabled={!!errorMsg} // Set disabled to true if errorMsg is truthy
                    >
                        <Text style={styles.buttonText}>Confirm address</Text>
                    </Pressable>
                </>
            )}
        </View>
    )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 80,
        gap: 20

    },
    text: {
        width: "60%",
        fontSize: 15

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
    disabledButton: {
        backgroundColor: '#bdc3c7', 
        borderColor: '#95a5a6', 
        opacity: 0.6, 
    },

    buttonText: {
        color: '#fff',
        fontSize: 16
    },
    loadingIndicator: {
        marginTop: 20,
    },
})