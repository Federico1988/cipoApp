import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../Components/Header'
import Search from '../Components/Search'
import allProducts from '../Data/products.json'
import ProductItem from '../Components/ProductItem'

const ItemListCategories = () => {
    return (
        <>
            <Header />
            <Search />
            <FlatList
                style={styles.container}
                data={allProducts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductItem item={item} />}
            />
        </>
    )
}

export default ItemListCategories

const styles = StyleSheet.create({

})