import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Search from '../Components/Search';
import ProductItem from '../Components/ProductItem';
import { useEffect, useState } from 'react';
import { colors } from '../Global/colors';
import { useGetProductsQuery } from '../app/sevices/shopServices';

const ItemListCategories = ({ navigation, route }) => {
    const { category } = route.params;
    const { data, isLoading, error } = useGetProductsQuery(category);
    const [keyword, setKeyword] = useState("");
    const [products, setProducts] = useState(data);
    const [isAtEnd, setIsAtEnd] = useState(false);

    if (error) console.log(error);

    useEffect(() => {
        if (!isLoading) {
            const arrayData = Object.values(data);
            const filteredProducts = arrayData.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()));
            setProducts(filteredProducts);
        }
    }, [keyword, data]);

    const handleEndReached = () => {
        setIsAtEnd(true);
    };
    const handleScroll = () => {
        setIsAtEnd(false);
    };

    return (
        <>
            <Search keyword={keyword} setKeyword={setKeyword} />
            <View style={styles.container}>
                <FlatList
                    style={styles.flatListStyle}
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ProductItem navigation={navigation} route={route} item={item} />}
                    onEndReached={handleEndReached}
                    onScroll={handleScroll}
                    onEndReachedThreshold={0.1}
                />
                {!isAtEnd && <Text style={styles.scrollMessage}>Scroll for more</Text>}
            </View>
        </>
    );
};

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.secondaryColor1,
    },
    flatListStyle: {
        maxHeight: 500,
    },
    scrollMessage: {
        paddingLeft: 30,
        fontSize: 20,
        color: colors.clearColor,
    },
});
