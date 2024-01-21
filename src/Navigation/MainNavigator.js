

import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigator';
import { useState } from 'react';
import AuthStack from "./AuthStack"
import { useSelector } from 'react-redux';

const MainNavigator = () => {

    const idToken = useSelector(state => state.auth.value.idToken);
    return (

        <NavigationContainer>
            {idToken ? <Navigator /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default MainNavigator