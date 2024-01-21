import { colors } from '../Global/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyProfile from '../Screens/MyProfile'

const Stack = createNativeStackNavigator();

const ProfileStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='MyProfile'
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
            <Stack.Screen name="Perfil" component={MyProfile} />

        </Stack.Navigator>
    )
}

export default ProfileStack