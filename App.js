import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from './src/Global/fonts';
import { colors } from './src/Global/colors';
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/Navigation/MainNavigator';
import { init, resetSessionTable } from './src/database';

init().then(() => console.log('DB Inited'))
  .catch(err => {
    console.log("DB Init failed: ");
    console.log(err.message);
  });


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
        <MainNavigator />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clearColor,
    alignItems: 'center',
    justifyContent: 'start',
  }
});
