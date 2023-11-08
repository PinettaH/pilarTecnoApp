import React, { Component } from 'react';
import Lists from '../pages/Lists/Lists';
import Detalle from '../pages/Lists/ListsDetail';
import { createStackNavigator } from '@react-navigation/stack';

const ListsStack = createStackNavigator();

export const ListsStackScreen = () => {
    return (
        <ListsStack.Navigator screenOptions={{ headerShown: false }}>
            <ListsStack.Screen name="Lists" component={Lists} />
            <ListsStack.Screen name="ListsDetail" component={Detalle} />
        </ListsStack.Navigator>
    )
}