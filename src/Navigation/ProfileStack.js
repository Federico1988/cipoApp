import { colors } from '../Global/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyProfile from '../Screens/MyProfile'
import LocationSelector from '../Screens/LocationSelector';

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
                    color: colors.darkColor,
                },
                headerTintColor: colors.darkColor,
            }}
        >
            <Stack.Screen name="Profile" component={MyProfile} />
            <Stack.Screen name="Address" component={LocationSelector} />

        </Stack.Navigator>
    )
}

export default ProfileStack