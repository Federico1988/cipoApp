import { StyleSheet, FlatList, Pressable, View, Text, Modal, Button } from 'react-native'
import allCart from "../Data/cart.json"
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/colors'
import { usePostOrdersMutation } from '../sevices/shopServices'
import { clearCart } from '../features/cart/cartSlice'

const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.value);
    const [triggerPostOrder] = usePostOrdersMutation();
    const [modalVisible, setModalVisible] = useState(false);

    const handleOrderConfirmation = async () => {
        try {
            console.log("running")
            await triggerPostOrder(cart);
            setModalVisible(true);
        } catch (error) {
            console.error('Error posting order:', error);
        }
    };

    const handleModalClose = () => {
        setModalVisible(false);
        dispatch(clearCart()); 
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
                <Pressable onPress={() => handleOrderConfirmation()}>
                    <Text style={styles.text}>Confirmar</Text>
                </Pressable>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleModalClose}
            >
                <View style={styles.modalContainer}>
                    <Text>Order Successful!</Text>
                    <Button title="OK" onPress={handleModalClose} />
                </View>
            </Modal>
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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})