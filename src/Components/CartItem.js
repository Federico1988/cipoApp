import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from "@expo/vector-icons";
import { colors } from '../Global/colors';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const confirmDelete = () => {
        Alert.alert(
            "Confirm Delete",
            `Are you sure you want to delete ${item.title}?`,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => {
                        dispatch(deleteItem(item));
                    },
                    style: "destructive"
                }
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.price}>Quantity: {item.quantity} - ${item.price}</Text>
            </View>
            <Pressable onPress={confirmDelete}>
                <Entypo name='trash' size={30} color='black' />
            </Pressable>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainColor1,
        margin: 10,
        padding: 29,
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
        maxWidth: 300,
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
        color: colors.clearColor
    }
});
