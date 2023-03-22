import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import ScreenNames from 'example/src/constants/screenNames';
import Home from 'example/src/screens/Home';
import ScreenTabsScreen from 'example/src/screens/ScreenTabs';
import { Colors } from 'react-native-lendy';
import ButtonsScreen from './screens/Buttons';

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
            title: 'Home',
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
