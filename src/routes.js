import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//pages
import Home from './pages/Home/home';
import InputValue from './pages/InputValue/inputValue';
import Spend from './pages/Spend/spend';

const Stack = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Entrada de Valor' component={InputValue} />
        <Stack.Screen name='Saida de Valor' component={Spend} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

