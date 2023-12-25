

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import { colors } from '../Global/colors';
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (

        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                }}
            >
                <Tab.Screen
                    name="ShopStack"
                    component={ShopStack}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Entypo name='shop'
                                    size={40}
                                    color={
                                        focused ?
                                            'black' :
                                            colors.mainColor2} />
                            )
                        }
                    }}
                />

                <Tab.Screen
                    name="CartStack"
                    component={CartStack}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Entypo name='shopping-cart'
                                    size={40}
                                    color={
                                        focused ?
                                            'black' :
                                            colors.mainColor2} />
                            )
                        }
                    }}
                    />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigator


const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.secondaryColor1,
        shadowColor: 'black',
        elevation: 4,
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
        borderRadius: 10,
        height: 80



    }
})
