import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from "@expo/vector-icons";
import { colors } from '../Global/colors';

const CartItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.price}>Cantidad: {item.quantity} - ${item.price}</Text>
            </View>
            <Entypo name='trash' size={30} color='black' />
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainColor1,
        margin: 10,
        padding: 10,
        height: 140,
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    textContainer: {
        justifyContent: 'space-between',
        padding: 5,
    },
    title: {

        fontSize: 25,
        color: colors.secondaryColor1
    },
    brand: {
        fontSize: 20,
        fontWeight: '400'

    },
    price: {

        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    }


})