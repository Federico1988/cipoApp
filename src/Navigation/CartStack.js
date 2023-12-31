import { colors } from '../Global/colors';
import { fonts } from '../Global/fonts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../Screens/Cart';
const Stack = createNativeStackNavigator();

const CartStack = () => {
    
    return (
        <Stack.Navigator
            initialRouteName='Cart'
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
                        <Stack.Screen name="Cart" component={Cart} />

        </Stack.Navigator>
    )
}

export default CartStack