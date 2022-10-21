
import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button, StyleSheet } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
  <View style={styles.button}>
      <Button
             title="Démarrer"
             color="#A2AEBB"
              style={styles.button}
              onPress={() =>
              navigation.navigate('Liste des films', { name: 'Jane' })
            }
          />
  </View>
  );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center'
     }
});

export default HomeScreen;


