import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import ScreenNames from 'example/src/constants/screenNames';
import Home from 'example/src/screens/Home';
import ScreenTabsScreen from 'example/src/screens/ScreenTabs';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
