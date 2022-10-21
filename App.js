
import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ListFilms from "./components/ListFilms.js"
import HomeScreen from "./components/HomeScreen.js"
import Film from "./components/Film.js"


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Liste des films" component={ListFilms} />
        <Stack.Screen name="Film" component={Film} />
      </Stack.Navigator>
    </NavigationContainer>
  );
    };


export default App;
