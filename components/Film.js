
import type {Node} from 'react';
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView,Image, View, StatusBar, StyleSheet, Text, ScrollView  } from "react-native";



const Film = ({ navigation, route }) => {
 return (
   <SafeAreaView style={styles.container}>

       <ScrollView style={styles.scrollView}>
        <Image source={{uri: route.params.poster[0]}}
                         style={{width: 400, height: 200}} />

         <Text style={styles.title}>
          {route.params.title}
         </Text>

         <View style={[styles.box, { backgroundColor: "#A2AEBB" }]}/>

         <Text style={styles.text}>Genre : {route.params.genre} </Text>
         <Text style={styles.text}>Année :  {route.params.year} </Text>
         <Text style={styles.text}>Casting (acteurs principaux) :  {route.params.actors}</Text>
         <Text style={styles.text}>metascore : {route.params.metascore} </Text>
         <Text style={styles.text}>imdbRating :  {route.params.imdbRating} </Text>
         <Text style={styles.text}>imdbVotes :  {route.params.imdbVotes} </Text>

       </ScrollView>
     </SafeAreaView>
     );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#A2AEBB',
    marginHorizontal: 20,
  },
  box: {
      height: 20,
    },

  title: {
     marginTop: 10,
     textAlign: 'center',
     fontSize: 36,
  },
  text: {
   marginHorizontal : 20,
   marginTop : 5,
   fontSize: 18,
  },
});

export default Film;