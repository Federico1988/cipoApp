import { StyleSheet, Text, View, Image, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const ProductItem = ({ item, setProductDetailId }) => {

    const { width } = useWindowDimensions();
    return (
        <Pressable style={styles.container} onPress={setProductDetailId(item.id)}>
            <Image
                style={width > 350 ? styles.imageMax : styles.imageMin}
                resizeMode='cover'
                source={{ uri: item.thumbnail }}
            />
            <Text style={width > 350 ? styles.textMax : styles.textMin}>{item.title}</Text>
        </Pressable>
    )
}

export default ProductItem

const commonTextStyle = {
    fontFamily: 'RobotoLight',
    flexWrap: 'wrap',
    flex: 1,
    textAlign: 'center',
};


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
        justifyContent: 'space-between',
    },
    imageMin: {

        marginRight: 10,
        minWidth: 50,
        minHeight: 50,
        borderRadius: 5
    },

    imageMax: {

        marginRight: 30,
        minWidth: 90,
        minHeight: 90,
        borderRadius: 10
    },
    textMax: {
        ...commonTextStyle,
        fontSize: 25,
    },
    textMin: {
        ...commonTextStyle,
        fontSize: 15,
    },


})