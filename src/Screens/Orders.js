import { StyleSheet, Text, View, FlatList } from 'react-native'
import allOrders from "../Data/orders.json"
import OrderItem from '../Components/OrderItem'
import { useGetOrdersQuery } from '../app/sevices/shopServices';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { colors } from '../Global/colors';

const Orders = () => {

    const localId = useSelector(state => state.auth.value.localId);
    const { data: orders} = useGetOrdersQuery(localId);
    const [ordersArray, setOrdersArray] = useState([]);

 useEffect(() => {
    //console.log('Data from db');
    //console.log(orders);

    const flattenedOrders = Object.values(orders || {}).flat();

    let sortedOrdersArray = flattenedOrders.sort((a, b) => {
      const dateA = new Date(a.updateAt);
      const dateB = new Date(b.updateAt);

      if (isNaN(dateA) || isNaN(dateB)) return b.updateAt.localeCompare(a.updateAt);

      return dateB - dateA;
    });

    setOrdersArray(sortedOrdersArray);
  }, [orders]);

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={ordersArray ? ordersArray : []}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                renderItem={({ item }) => <OrderItem order={item} />}
            />
        </View>
    )
}

export default Orders
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondaryColor1
    },
    flatList: {
        flex: 1,
        marginBottom: 180,
    },
});