import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from "../Data/catergories.json"
import CategoryItem from './CategoryItem'

const Categories = ({setSelectedCategory}) => {
    return (

        <FlatList
            style={styles.container}
            data={categories}
            keyExtractor={item => item}
            renderItem={({ item }) => <CategoryItem category={item} setSelectedCategory={setSelectedCategory} />}
        />

    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        width: "100%",
        margin: 10
    }
})