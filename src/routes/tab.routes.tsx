import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import Home from '../screens/Home';

interface tabBarIconProps {
  size: number;
  color: string;
}

const AppTab = createBottomTabNavigator();

function AuthRoutes() {
  const { theme } = useContext(ThemeContext);

  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.red,
        // inactiveTintColor: verifyTheme ? light.colors.heading : dark.colors.heading,
        inactiveBackgroundColor: theme.colors.scndBackground,
        activeBackgroundColor: theme.colors.background,
        labelPosition: 'beside-icon',
        style: {
          height: 60,
          borderWidth: 1,
          borderTopColor: theme.colors.scndBackground,
        },
      }}
    >
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }: tabBarIconProps) => (
            <MaterialIcons name="add-circle-outline" size={size} color={color} />
          )),
        }}
      />
    </AppTab.Navigator>
  );
}
export default AuthRoutes;
