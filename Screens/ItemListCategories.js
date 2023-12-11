import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../Components/Header'
import Search from '../Components/Search'
import allProducts from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'

const ItemListCategories = () => {

    const [keyword, setKeyword] = useState("");
    const [filteredProducts, setfilteredProducts] = useState([]);


    useEffect(() => {
        setfilteredProducts(allProducts.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase())));
    }, [keyword]);

    return (
        <>
            <Header />
            <Search keyword={keyword} setKeyword={setKeyword} />
            <FlatList
                style={styles.container}
                data={filteredProducts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductItem item={item} />}
            />
        </>
    )
}

export default ItemListCategories

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }

})