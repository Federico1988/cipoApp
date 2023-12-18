import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import allProducts from "../Data/products.json"
import { useEffect, useState } from 'react'

const ItemDetail = ({ route }) => {
    const { id } = route.params;
    const [prod, setProd] = useState({});

    useEffect(() => {
        setProd(allProducts.find(prod => prod.id === id));
    }, [id])
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: prod.thumbnail }}
                resizeMode="cover"
            />
            <Text style={styles.text}>{prod.title}</Text>
            <Pressable>
                <Text>Comprar!</Text>
            </Pressable>
        </View >
    )
}

export default ItemDetail

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 180,
        borderRadius: 10

    },
    text: {

    }

})