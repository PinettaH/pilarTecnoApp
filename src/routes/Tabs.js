import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeStackScreen } from './HomeStack';
import { PerfilStackScreen } from './ProfileStack';
import { MapasStackScreen } from './MapStack';
import { ListsStackScreen } from './ListsStack'
import { Icon } from '@rneui/themed';


const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {

    return (
        <Tab.Navigator
            activeColor={'rgb(41,34,97)'} //'#f5c511' // 'rgb(41,34,97)',
            inactiveColor={'white'}
            barStyle={{
                backgroundColor: 'blue'
            }}
        >
            <Tab.Screen name="HomeTab" component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'home'} type="font-awesome-5" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="PerfilTab" component={PerfilStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'user'} type="font-awesome-5" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="ListsTab" component={ListsStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'pen-nib'} type="font-awesome-5" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="MapasTab" component={MapasStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name={'map'} type="font-awesome-5" size={20} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}