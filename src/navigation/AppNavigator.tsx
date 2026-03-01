// ==================================================
// APP NAVIGATOR
// Handles stack navigation between screens.
//
// Screens:
// - Products (main list)
// - Product Detail
// - Shopping Cart
//
// Uses React Navigation Native Stack.
// ==================================================

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../views/Welcome';
import ProductDetail from '../views/ProductDetail';
import Cart from '../views/Cart';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Products" component={Welcome}/>
    <Stack.Screen name="Detail" component={ProductDetail}/>
    <Stack.Screen name="Cart" component={Cart}/>
  </Stack.Navigator>
);

export default AppNavigator;