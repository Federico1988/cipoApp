import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'

import { AntDesign, Entypo } from "@expo/vector-icons"
import { fonts } from '../Global/fonts'


const Header = ({ title = "Producto", setSelectedCategory }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>{title}</Text>
            </View>
{/* 
            <Pressable style={styles.backButton} onPress={() => setSelectedCategory("") }> 
                <AntDesign name='back' color='black' size={25} />
            </Pressable> */}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainColor1,
        width: "100%",
        paddingTop: 50,
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
    },
    text: {
        fontSize: 30,
        fontFamily: 'RobotoBlack'
    },
    backButton: {

    },
})