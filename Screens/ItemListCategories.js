import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Search from '../Components/Search'
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors';
import { useSelector, useDispatch } from 'react-redux'


const ItemListCategories = ({ navigation, route }) => {
    const filteredByCategoryProducts = useSelector(state => state.shop.value.filteredByCategoryProducts)
    const { category } = route.params;
    const [keyword, setKeyword] = useState("");
    const [filteredProducts, setfilteredProducts] = useState(filteredByCategoryProducts);
    const dispatch = useDispatch()



    useEffect(() => {
        if (category) {
            const prodCategory = filteredByCategoryProducts.filter(prod => prod.category === category);
            setfilteredProducts(prodCategory.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase())));
        }
        else {
            setfilteredProducts(filteredByCategoryProducts.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase())));

        }
    }, [keyword, filteredByCategoryProducts]);

    return (
        <>
            <Search keyword={keyword} setKeyword={setKeyword} />

            <FlatList
                style={styles.container}
                data={filteredProducts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductItem
                    navigation={navigation}
                    route={route}
                    item={item}
                />}
            />
        </>
    )
}

export default ItemListCategories

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: colors.secondaryColor1
    }

})