import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../Components/Header'
import Search from '../Components/Search'
import allProducts from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'
import { AntDesign, Entypo } from "@expo/vector-icons"

const ItemListCategories = ({ category, setSelectedCategory, setHeaderTitle, setProductDetailId }) => {

    const [keyword, setKeyword] = useState("");
    const [filteredProducts, setfilteredProducts] = useState([]);


    useEffect(() => {
        if (category) {
            setHeaderTitle(category);
            const prodCategory = allProducts.filter(prod => prod.category === category);
            setfilteredProducts(prodCategory.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase())));
        }
        else {
            setfilteredProducts(allProducts.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase())));

        }
    }, [keyword]);

    return (
        <>
            <Search keyword={keyword} setKeyword={setKeyword} />

            <FlatList
                style={styles.container}
                data={filteredProducts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductItem
                    item={item}
                    setProductDetailId={setProductDetailId}
                />}
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