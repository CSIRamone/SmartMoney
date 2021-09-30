import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Report from './pages/Report';
import Main from './pages/Main';
import NewEntry from './pages/NewEntry';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Smart Money" component={Main} />
        <Stack.Screen name="NewEntry" component={NewEntry} />
        <Stack.Screen name="Report" component={Report} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
