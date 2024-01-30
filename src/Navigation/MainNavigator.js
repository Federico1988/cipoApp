

import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigator';
import { useEffect, useState } from 'react';
import AuthStack from "./AuthStack"
import { useSelector, useDispatch } from 'react-redux';
import { fetchSession } from '../database';
import { setUser } from '../features/auth/authSlice';

const MainNavigator = () => {
    const dispatch = useDispatch();
    const idToken = useSelector(state => state.auth.value.idToken);

    useEffect(() => {
        (async () => {
            try {
                const session = await fetchSession();
                if (session.rows.length) {
                    const user = session.rows._array[0];
                    console.log("User from db", user)
                    dispatch(setUser(user));
                }
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);

    return (

        <NavigationContainer>
            {idToken ? <Navigator /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default MainNavigator