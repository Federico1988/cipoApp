import { Pressable, StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header'
import allProducts from "../Data/products.json"
import { useEffect, useState } from 'react'

const ItemDetail = ({ productDetalId }) => {

    const [prod, setProd] = useState({});

    useEffect(() => {
        setProd(allProducts.find(prod => prod.id === productDetalId));
    }, [productDetalId])
    return (
        <View style={styles.container}>
            <Header />
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
        flex: "1",
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