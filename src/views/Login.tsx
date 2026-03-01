// ==================================================
// LOGIN SCREEN
// Allows user registration and login.
// User data is stored locally using AsyncStorage.
// ==================================================

// register()
// Saves username and password into local storage.

// handleLogin()
// Validates user credentials using saved data.

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../styles/theme';

const Login = ({ onLogin }: any) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 🔥 REGISTRO SIMPLE LOCAL
  const register = async () => {

    if (!username || !password) {
      Alert.alert('Complete los campos');
      return;
    }

    await AsyncStorage.setItem(
      'user',
      JSON.stringify({ username, password })
    );

    Alert.alert('Usuario creado ✔');
  };

  const handleLogin = async () => {

    const saved = await AsyncStorage.getItem('user');

    if (saved) {
      const user = JSON.parse(saved);

      if (
        user.username === username &&
        user.password === password
      ) {
        onLogin(username, 'token-local');
        return;
      }
    }

    Alert.alert('Usuario no válido');
  };

  return (
    <View
      style={{
        flex:1,
        justifyContent:'center',
        padding:20,
        backgroundColor: colors.background
      }}
    >

      <View
        style={{
          backgroundColor: colors.card,
          padding:20,
          borderRadius:12,
          elevation:3
        }}
      >

        <Text
          style={{
            fontSize:24,
            fontWeight:'bold',
            marginBottom:20,
            color: colors.text,
            textAlign:'center'
          }}
        >
          Fake Store
        </Text>

        <TextInput
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
          style={{
            borderWidth:1,
            borderColor: colors.soft,
            padding:12,
            marginBottom:10,
            borderRadius:8,
            backgroundColor:'#fff'
          }}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{
            borderWidth:1,
            borderColor: colors.soft,
            padding:12,
            marginBottom:15,
            borderRadius:8,
            backgroundColor:'#fff'
          }}
        />

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: colors.primary,
            padding:12,
            borderRadius:8,
            marginBottom:10
          }}
        >
          <Text style={{ color:'#fff', textAlign:'center' }}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={register}
          style={{
            backgroundColor: colors.secondary,
            padding:12,
            borderRadius:8
          }}
        >
          <Text style={{ textAlign:'center', color:'#000' }}>
            Crear usuario
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Login;