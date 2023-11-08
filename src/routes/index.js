import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Login from '../pages/Auth/Login'
// import Home from '../pages/home';

const Stack = createStackNavigator();

export default AppStack = (props) => {
    const isLogged = true

    return (
        <Stack.Navigator screenOptions={{ headerMode: false }}>
            {
                true ? (
                    <Stack.Screen name="AppStack" component={Tabs} />
                ) : (
                    <Stack.Screen name="Login" component={Login} />
                )
            }
        </Stack.Navigator>
    )
}