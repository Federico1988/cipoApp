import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import ItemListCategories from './Screens/ItemListCategories';
import { useState } from 'react'
import Header from './Components/Header';
import { useFonts } from 'expo-font';
import { fonts } from './Global/fonts';
import { SafeAreaView } from 'react-native-web';
import { colors } from './Global/colors';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productDetailId, setProductDetailId] = useState("");
  const [headerTitle, setHeaderTitle] = useState("Categorias");
  if (!fontsLoaded)
    return null;
  return (
    <>
      <StatusBar
        backgroundColor={colors.green1}
        barStyle="default"
      />
      <SafeAreaView style={styles.container}>

        <Header setSelectedCategory={setSelectedCategory} title={headerTitle} />
        {selectedCategory ?
          (<ItemListCategories
            category={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setHeaderTitle={setHeaderTitle}
            setProductDetailId={setProductDetailId}
          />) :
          (<Home setSelectedCategory={setSelectedCategory} setHeaderTitle={setHeaderTitle} />)}
      </SafeAreaView >
    </>
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
