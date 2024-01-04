import { StyleSheet, FlatList, Pressable, View, Text } from 'react-native'
import allCart from "../Data/cart.json"
import { useEffect, useState } from 'react'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/colors'

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        //Aca va la com con al db
        setCart(allCart);
        if (cart.length != 0)
            setTotalPrice(cart.reduce((acc, product) => acc + (product.price * product.quantity), 0));

    }, [cart]);
    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={(item => item.id)}
                renderItem={({ item }) => <CartItem item={item} />}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.text}>Total: ${totalPrice}</Text>
                <Pressable>
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