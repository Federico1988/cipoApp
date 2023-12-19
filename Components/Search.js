import { StyleSheet, TextInput, Text, Pressable, View, useWindowDimensions } from 'react-native'
import { colors } from '../Global/colors'
import { AntDesign, Entypo } from "@expo/vector-icons"
import { useState } from 'react'

const Search = ({ setKeyword }) => {

    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const { width } = useWindowDimensions();

    const search = () => {
        setError("");
        const regExHasNumber = /\d/;
        if (regExHasNumber.test(input)) {
            setError("Error! No debe contener numeros");
        }
        else
            setKeyword(input);
    }

    const resetSearch = () => {
        setInput("");
        setError("");
        setKeyword("");
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput style={width > 350 ? styles.inputMax : styles.inputMin} placeholder='Buscar' value={input} onChangeText={(t) => setInput(t)} />
                <Pressable onPress={() => { search() }}>
                    <AntDesign name='search1' color='black' size={width > 350 ? 40 : 20} />
                </Pressable>
                <Pressable onPress={() => resetSearch()}>
                    <Entypo name='erase' color='black' size={width > 350 ? 40 : 20} />
                </Pressable>
            </View>
            {error ? <Text style={styles.errorStyle}>{error}</Text> : null}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.mainColor1,
        width: "100%",
        alignItems: "center"
    },
    inputMax: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        width: "70%",
        backgroundColor: colors.mainColor2,
        fontSize: 25,
        fontFamily: 'RobotoLightItalic',
    },
    inputMin: {
        borderWidth: 2,
        borderRadius: 3,
        padding: 5,
        width: "70%",
        backgroundColor: colors.mainColor2,
        fontSize: 15,
        fontFamily: 'RobotoLightItalic',
    },
    searchContainer: {
        width: "80%",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 10,
        justifyContent: 'space-between'

    },
    errorStyle: {
        color: "red",
        paddingHorizontal: 10
    }
})