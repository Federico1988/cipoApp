import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import { useFonts } from 'expo-font';
import { fonts } from './Global/fonts';
import { colors } from './Global/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './Navigation/Navigator';
import { store } from './app/store'
import { Provider } from 'react-redux'


export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded)
    return null;
  return (
    <>
      <StatusBar
        backgroundColor={colors.mainColor1}
        barStyle="default"
      />
      <Provider store={store}>
        <Navigator />
      </Provider>

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
