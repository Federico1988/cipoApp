import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { useEffect, useState } from 'react'
import { fonts } from '../Global/fonts'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'


const ItemDetail = ({ route }) => {
    const prod = useSelector((state) => state.shop.value.selectedProduct);
    return (
        <View style={styles.container}>
            <Text style={styles.prodName}>{prod.title}</Text>
            <Image
                style={styles.image}
                source={{ uri: prod.thumbnail }}
                resizeMode="cover"
            />
            <Text style={styles.description}>{prod.description}</Text>
            <Pressable style={styles.buyButton}>
                <Text style={styles.buyText}>Comprar!</Text>
            </Pressable>
        </View >
    )
}

export default ItemDetail

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.secondaryColor1
    },
    image: {
        width: "100%",
        height: 250,
        marginVertical: 20
    },
    prodName: {
        fontFamily: 'RobotoLight',
        fontSize: 35,
        marginVertical: 20
    },
    description:
    {
        padding: 10,
        fontFamily: 'RobotoLightItalic',
        fontSize: 25,
        marginVertical: 20

    },
    buyButton: {
        marginVertical: 20,
        borderWidth: 2,
        borderRadius: 5,
        padding: 20,
    },
    buyText: {
        fontFamily: 'RobotoBlack',
        fontSize: 20
    }

})