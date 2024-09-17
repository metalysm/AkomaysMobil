import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import SettingScreen from '../screens/SettingScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import CustomDrawerContent from '../components/lineMenu';

const Drawer = createDrawerNavigator();

export default function LineNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    drawerPosition: 'left',
                    drawerType: 'slide',
                }}
            >
                <Drawer.Screen name="Home" component={MainScreen} />
                <Drawer.Screen name="Settings" component={SettingScreen} />
                <Drawer.Screen name="Statistics" component={StatisticsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
