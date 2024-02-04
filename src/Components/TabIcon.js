import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { colors } from '../Global/colors';


const TabIcon = ({ focused, title, iconName }) => {
    return (
        <View style={styles.container}>
            <Entypo name={iconName}
                size={40}
                color={
                    focused ?
                        'black' :
                        colors.secondaryColor1} />
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default TabIcon

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    text: {
        color: colors.clearColor,
        fontWeight: '500',
        fontSize:18
    }
})