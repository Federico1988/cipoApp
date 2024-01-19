import { StyleSheet, FlatList, Pressable, View, Text } from 'react-native'
import allCart from "../Data/cart.json"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/colors'
import { usePostOrdersMutation } from '../sevices/shopServices'

const Cart = () => {

    const cart = useSelector(state => state.cart.value);
    const [triggerPostOrder] = usePostOrdersMutation();
    

    return (
        <View style={styles.container}>
            <FlatList
                data={cart.items}
                keyExtractor={(item => item.id)}
                renderItem={({ item }) => <CartItem item={item} />}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.text}>Total: ${cart.total}</Text>
                <Pressable onPress={()=>triggerPostOrder(cart)}>
                    <Text style={styles.text}>Confirmar</Text>
                </Pressable>
            </View>
        </View>

    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 120,
    },
    totalContainer: {
        backgroundColor: colors.secondaryColor1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 40


    },
    text: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,

    }
})