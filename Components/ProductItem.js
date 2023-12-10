import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const ProductItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: colors.green1,
        margin: 10,
        marginHorizontal: "10%",
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10,

    }
})