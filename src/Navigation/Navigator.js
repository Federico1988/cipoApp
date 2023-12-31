

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import { colors } from '../Global/colors';
import { Entypo } from "@expo/vector-icons";
import OrdersStack from './OrdersStack';
import TabIcon from '../Components/TabIcon';

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
                        tabBarIcon: ({ focused }) => <TabIcon focused={focused} title={"Shop"} iconName='shop' />
                    }}
                />

                <Tab.Screen
                    name="CartStack"
                    component={CartStack}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon focused={focused} title={"Cart"} iconName='shopping-cart' />
                    }}
                />

                <Tab.Screen
                    name="OrdersStack"
                    component={OrdersStack}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon focused={focused} title={"Orders"} iconName='list' />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigator


const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.mainColor2,
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
