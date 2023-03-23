import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Colors } from 'react-native-lendy';

import ScreenNames from './constants/screenNames';
import ButtonsScreen from './screens/Buttons';
import Home from './screens/Home';
import InputsScreen from './screens/Inputs';
import ScreenTabsScreen from './screens/ScreenTabs';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={() => ({
          headerTintColor: Colors.Dark,
          headerStyle: {
            backgroundColor: Colors.Yellow,
          },
          drawerStyle: {
            backgroundColor: Colors.Dark,
          },
          drawerItemStyle: {
            backgroundColor: Colors.Dark,
          },
          drawerActiveTintColor: Colors.Yellow,
          drawerInactiveTintColor: Colors.White,
        })}
      >
        <Drawer.Screen
          name={ScreenNames.Home}
          component={Home}
          options={{
            title: 'Lendy Components Library',
          }}
        />
        <Drawer.Screen
          name={ScreenNames.ScreenTabs}
          component={ScreenTabsScreen}
          options={{
            title: 'Screen Tabs',
          }}
        />
        <Drawer.Screen
          name={ScreenNames.Buttons}
          component={ButtonsScreen}
          options={{
            title: 'Buttons',
          }}
        />
        <Drawer.Screen
          name={ScreenNames.Inputs}
          component={InputsScreen}
          options={{
            title: 'Inputs',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
