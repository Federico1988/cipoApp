import { colors } from '../Global/colors';
import { fonts } from '../Global/fonts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../Screens/Cart';
import Orders from '../Screens/Orders';
const Stack = createNativeStackNavigator();

const OrdersStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='Orders'
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
            <Stack.Screen name="Orders" component={Orders} />

        </Stack.Navigator>
    )
}

export default OrdersStack