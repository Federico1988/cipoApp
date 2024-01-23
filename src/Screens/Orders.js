import { StyleSheet, Text, View, FlatList } from 'react-native'
import allOrders from "../Data/orders.json"
import OrderItem from '../Components/OrderItem'
import { useGetOrdersQuery } from '../app/sevices/shopServices';
import { useEffect, useState } from 'react';

const Orders = () => {

    const { data: orders, isLoading, error } = useGetOrdersQuery();
    const [ordersArray, setOrdersArray] = useState([]);

    useEffect(() => {
        setOrdersArray(orders ? Object.values(orders) : []);
    }, [orders]);

    console.log(ordersArray);
    return (
        <FlatList
            data={ordersArray ? ordersArray : []}
            keyExtractor={(item, index) => `${item.id}-${index}`} // Use a unique key, assuming orders have an 'id' property
            renderItem={({ item }) => <OrderItem order={item} />}
        />
    )
}

export default Orders

const styles = StyleSheet.create({})