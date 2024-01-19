import { StyleSheet, FlatList, Pressable, View, Text } from 'react-native'
import allCart from "../Data/cart.json"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/colors'
import { usePostOrdersMutation } from '../sevices/shopServices'
import { clearCart } from '../features/cart/cartSlice'

const Cart = () => {

    const cart = useSelector(state => state.cart.value);
    const [triggerPostOrder] = usePostOrdersMutation();
    const onSuccessCallback = (data, variables, context) => {
        dispatch(clearCart());
        //set modal
      };
      
  const handleOrderSubmit = async () => {
    try {
      await triggerPostOrder(cart, {
        onSuccess: onSuccessCallback,
      });
    } catch (error) {
        console.log(error);
    }
  };

    return (
        <View style={styles.container}>
            <FlatList
                data={cart.items}
                keyExtractor={(item => item.id)}
                renderItem={({ item }) => <CartItem item={item} />}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.text}>Total: ${cart.total}</Text>
                <Pressable onPress={handleOrderSubmit}>
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