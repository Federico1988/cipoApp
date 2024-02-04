import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CategoryItem from './CategoryItem';
import { useGetCategoriesQuery } from '../app/sevices/shopServices';
import { colors } from '../Global/colors';

const Categories = ({ navigation, route }) => {
  const { data: categories, isLoading, error } = useGetCategoriesQuery();

  return (
    <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() =>
            navigation.navigate('ItemListCategories', { category: item })
          }>
          <CategoryItem category={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.secondaryColor2,
  },
  categoryButton: {
    marginBottom: 15,
    backgroundColor: colors.mainColor1,
    borderRadius: 10,
    padding: 15,
  },
});
