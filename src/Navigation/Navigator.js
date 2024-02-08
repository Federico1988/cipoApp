
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
        borderTopWidth:1,
        borderTopColor: colors.darkColor,
        backgroundColor: colors.secondaryColor1,
        shadowColor: colors.darkColor,
        elevation: 4,
        position: 'absolute',
        height: 120,
        
    }
})
