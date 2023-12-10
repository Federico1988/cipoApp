import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow'

const CategoryItem = ({ category }) => {
    return (
        <CardShadow style={styles.container}>
            <Text style={styles.text}>{category}</Text>
        </CardShadow>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginHorizontal: "10%",
        backgroundColor: colors.green2,
        margin: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    }
})