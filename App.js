import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import ItemListCategories from './Screens/ItemListCategories';

export default function App() {
  return (
    <View style={styles.container}>

      <ItemListCategories />
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
