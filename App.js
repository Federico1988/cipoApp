import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import { useFonts } from 'expo-font';
import { fonts } from './Global/fonts';
import { colors } from './Global/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './Navigation/Navigator';


export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded)
    return null;
  return (
    <>
      <StatusBar
        backgroundColor={colors.green1}
        barStyle="default"
      />

      <Navigator />
      {/*<SafeAreaView style={styles.container}>

         <Header setSelectedCategory={setSelectedCategory} title={headerTitle} />
        {selectedCategory ?
          (<ItemListCategories
            category={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setHeaderTitle={setHeaderTitle}
            setProductDetailId={setProductDetailId}
          />) :
          (<Home setSelectedCategory={setSelectedCategory} setHeaderTitle={setHeaderTitle} />)} 
      </SafeAreaView >*/}
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
