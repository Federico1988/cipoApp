import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons"
import { colors } from '../Global/colors';

const OrderItem = ({ order }) => {

    const total = order.items?.length > 0 ? order.items.reduce((acc, product) => acc + (product.price * product.quantity), 0) : 0;


    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{order.updateAt}</Text>
                <Text style={styles.text}>Total ${total}</Text>

            </View>
            <Feather name="search" size={25} color='black' />
        </View>
    )
}

export default OrderItem

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
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    }


})