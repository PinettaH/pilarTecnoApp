import React, { Component } from 'react';
import Perfil from '../pages/Perfil/Profile';

import { createStackNavigator } from '@react-navigation/stack';

const PerfilStack = createStackNavigator();

export const PerfilStackScreen = () => {
    return (
        <PerfilStack.Navigator screenOptions={{ headerShown: false }}>
            <PerfilStack.Screen name="Perfil" component={Perfil} />
        </PerfilStack.Navigator>
    )
}