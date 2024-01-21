
import { StyleSheet } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import { colors } from '../Global/colors';
import OrdersStack from './OrdersStack';
import TabIcon from '../Components/TabIcon';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (

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
            <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} title={"Profile"} iconName='user' />
                }}
            />
        </Tab.Navigator>
    )
}

export default Navigator


const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.mainColor2,
        shadowColor: 'black',
        elevation: 4,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: 10,
        height: 120
    }
})
