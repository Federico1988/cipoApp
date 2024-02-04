import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Search from '../Components/Search'
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors';
import { useGetProductsQuery } from '../app/sevices/shopServices';


const ItemListCategories = ({ navigation, route }) => {

    const {category} = route.params
    const { data, isLoading, error } = useGetProductsQuery(category);
    const [keyword, setKeyword] = useState("");
    const [products, setProducts] = useState(data);

    if (error) console.log(error);

    useEffect(() => {
        if (!isLoading) {
            //console.log(data)
            const arrayData = Object.values(data);
            const filteredProducts = arrayData.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()));
            setProducts(filteredProducts);
            
        }
    }, [keyword, data]);

    return (
        <>
            <Search keyword={keyword} setKeyword={setKeyword} />

            <FlatList
                style={styles.container}
                data={products}
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
        marginBottom: 140,
        backgroundColor: colors.secondaryColor1
    }

})