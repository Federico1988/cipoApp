import { StyleSheet, TextInput,Pressable, View } from 'react-native'
import { colors } from '../Global/colors'
import { AntDesign, Entypo } from "@expo/vector-icons"

const Search = () => {
    return (

        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Buscar' />
            <Pressable>
                <AntDesign name='search1' color='black' size={25} />
            </Pressable>
            <Pressable>
                <Entypo name='erase' color='black' size={25} />
            </Pressable>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({

    input: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        width: "70%",
        backgroundColor: colors.green2,

    },
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 10,
        backgroundColor: colors.green1

    }
})