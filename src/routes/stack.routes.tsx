import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import Home from '../screens/Home';

const stackRoutes = createStackNavigator();

function AppRoutes() {
  const { theme } = useContext(ThemeContext);

  return (
    <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <stackRoutes.Screen name="Home" component={Home} />
    </stackRoutes.Navigator>
  );
}

export default AppRoutes;
