import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow'
import { useDispatch } from 'react-redux'
import { setFilterCategory } from "../features/shop/shopSlice"

const CategoryItem = ({ category, navigation, route }) => {
    const dispatch = useDispatch()

    return (
        <Pressable onPress={() => {
            dispatch(setFilterCategory(category));
            navigation.navigate("Category", { category });
        }}>
            <CardShadow style={styles.container}>
                <Text style={styles.text}>{category}</Text>
            </CardShadow>
        </Pressable>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginHorizontal: "10%",
        backgroundColor: colors.mainColor2,
        margin: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10,
    },
    text: {
        fontFamily: 'RobotoLightItalic',
        color: colors.clearColor,
        fontSize: 25
    }

})