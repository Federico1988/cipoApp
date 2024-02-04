
import Home from "../Screens/Home"
import ItemListCategory from "../Screens/ItemListCategories"
import ItemDetail from "../Screens/ItemDetail"
import Header from '../Components/Header';
import { colors } from '../Global/colors';
import { fonts } from '../Global/fonts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const ShopStack = () => {
    
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.mainColor1,
                    height: 80, 
                },
                headerTitleStyle: {
                    fontSize: 32,
                    fontFamily: 'RobotoBlack',
                    color: colors.darkColor,
                },
                headerTintColor: colors.darkColor, 
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Category" component={ItemListCategory} />
            <Stack.Screen name="Product" component={ItemDetail} />
        </Stack.Navigator>
    )
}

export default ShopStack