import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const ProductItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode='cover'
                source={{ uri: item.thumbnail }}
            />
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start"

    },
    image: {
        marginRight:30,
        width: 50,
        height: 50,
        borderRadius:10
    },
    text:{
        fontSize:25,
        fontFamily: 'RobotoLight'
    }

})