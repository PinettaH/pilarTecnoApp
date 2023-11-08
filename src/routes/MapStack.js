import React, { Component } from 'react';
import Mapas from '../pages/Mapa/Maps';
import { createStackNavigator } from '@react-navigation/stack';

const MapasStack = createStackNavigator();

export const MapasStackScreen = () => {
    return (
        <MapasStack.Navigator screenOptions={{ headerShown: false }}>
            <MapasStack.Screen name="Mapas" component={Mapas} />
        </MapasStack.Navigator>
    )
}