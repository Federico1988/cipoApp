import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'

import { AntDesign, Entypo } from "@expo/vector-icons"


const Header = ({ title = "Producto", setSelectedCategory }) => {
    return (
        <View style={styles.container}>

            <Pressable onPress={() => setSelectedCategory("")}>
                <AntDesign name='back' color='black' size={25} />
            </Pressable>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
        paddingBottom: 20,
        flexDirection:"row"

    },
    text: {
        fontSize: 20
    }
})