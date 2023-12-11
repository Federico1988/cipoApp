import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import ItemListCategories from './Screens/ItemListCategories';
import { useState } from 'react'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <View style={styles.container}>
      {selectedCategory ? <ItemListCategories category={selectedCategory} /> :
        <Home setSelectedCategory={setSelectedCategory} />}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  }
});
