import { StyleSheet, FlatList } from 'react-native'
import allCart from "../Data/cart.json"
import { useEffect, useState } from 'react'
import CartItem from '../Components/CartItem'

const Cart = () => {
    const [cart, setCart] = useState();

    useEffect(() => {
        //Aca va la com con al db
        setCart(allCart)
    }, []);
    return (
            <FlatList
                data={cart}
                keyExtractor={(item => item.id)}
                renderItem={({ item }) => <CartItem item={item} />}
            />

    )
}

export default Cart

const styles = StyleSheet.create({})