import { StyleSheet, TextInput, Text, Pressable, View } from 'react-native'
import { colors } from '../Global/colors'
import { AntDesign, Entypo } from "@expo/vector-icons"
import { useState } from 'react'

const Search = ({ setKeyword }) => {

    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const search = () => {
        setError("");
        const regExHasNumber =  /\d/;
        if (regExHasNumber.test(input)) {
            setError("Error! No debe contener numeros");
        }
        else
            setKeyword(input);
    }

    const resetSearch = () => {
        setInput("");
        setError("");
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput style={styles.input} placeholder='Buscar' value={input} onChangeText={(t) => setInput(t)} />
                <Pressable onPress={() => { search() }}>
                    <AntDesign name='search1' color='black' size={25} />
                </Pressable>
                <Pressable onPress={() => resetSearch()}>
                    <Entypo name='erase' color='black' size={25} />
                </Pressable>
            </View>
            {error ? <Text style={styles.errorStyle}>{error}</Text> : null}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.green1,
        width: "100%",
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        width: "70%",
        backgroundColor: colors.green2,
        fontSize:20,
        fontFamily: 'RobotoLightItalic',

    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 10

    },
    errorStyle: {
        color: "red",
        paddingHorizontal: 10
    }
})