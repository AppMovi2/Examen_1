// ==================================================
// MAIN APP COMPONENT
// Entry point of the application.
//
// Responsibilities:
// - Wraps the app with Redux Provider
// - Handles navigation container
// - Controls login state
// - Loads main screens after authentication
// ==================================================

import React, { useState, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { store } from './src/redux/store';
import { addToCart } from './src/redux/cartSlice';

import Login from './src/views/Login';
import AppNavigator from './src/navigation/AppNavigator';

const MainApp = () => {

  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  // 🔥 CARGAR carrito desde localStorage
  useEffect(() => {

    const loadCart = async () => {

      const saved = await AsyncStorage.getItem('cart');

      if (saved) {
        const parsed = JSON.parse(saved);

        parsed.forEach((item:any) => {
          dispatch(addToCart(item));
        });
      }
    };

    loadCart();

  }, []);

  return (
    <NavigationContainer>

      {token.length > 0 ? (
        <AppNavigator />
      ) : (
        <Login onLogin={(_:any, tk:any)=>setToken(tk)} />
      )}

    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;