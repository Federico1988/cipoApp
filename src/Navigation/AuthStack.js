import { colors } from '../Global/colors';
import { fonts } from '../Global/fonts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    
    return (
        <Stack.Navigator
            initialRouteName='Signup'
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.mainColor1,
                    height: 80, 
                },
                headerTitleStyle: {
                    fontSize: 32,
                    fontFamily: 'RobotoBlack',
                    color: 'black',
                },
                headerTintColor: 'black', 
            }}
        >
                        <Stack.Screen name="Signup" component={Signup} />
                        <Stack.Screen name="Login" component={Login} />

        </Stack.Navigator>
    )
}

export default AuthStack