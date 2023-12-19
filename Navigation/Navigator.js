

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../Screens/Home"
import ItemListCategory from "../Screens/ItemListCategories"
import ItemDetail from "../Screens/ItemDetail"
import Header from '../Components/Header';
import { colors } from '../Global/colors';
import { fonts } from '../Global/fonts';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.mainColor1,
                        height: 80, // Adjust the header height as needed
                    },
                    headerTitleStyle: {
                        fontSize: 32,
                        fontFamily: 'RobotoBlack',
                        color: 'black',
                    },
                    headerTintColor: 'black', // Back button and title color
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Category" component={ItemListCategory} />
                <Stack.Screen name="Product" component={ItemDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
