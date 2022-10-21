
import type {Node} from 'react';
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { FlatList,TextInput, View, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import films from '../films.json';
import { Searchbar } from 'react-native-paper';


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.Title}</Text>
     <Text style={[styles.paragraph, textColor]}>{item.Year}</Text>
      <Text style={[styles.paragraph, textColor]}>{item.Genre}</Text>
      <Text style={[styles.paragraph, textColor]}>{item.Director}</Text>
  </TouchableOpacity>
);

const ListFilms = ({ navigation, route }) =>  {

  const [selectedId, setSelectedId] = useState(null);
  const [input, setInput] = useState("");
  const [results, setResults] = useState(films)


    function fetchData(text) {
          const res = films.filter(
             function (item) {
                    const itemData = item.Title
                        ? item.Title.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                  }
          );
          setResults(res);
      }

  const renderItem = ({ item }) => {
    const backgroundColor =  "#A2AEBB";
    const color = 'black';

    return (
      <Item
        item={item}
        onPress={() =>
         navigation.navigate('Film',
         {
            title: item.Title,
            year: item.Year,
            genre: item.Genre,
            director: item.Director,
            poster: item.Images,
            actors: item.Actors,
            metascore: item.Metascore,
            imdbRating: item.imdbRating,
            imdbVotes: item.imdbVotes,
         }
         )
        }
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
     <Searchbar
             placeholder="Search"
             onChangeText={(text) => {
                fetchData(text);
                 setInput(text);
             }}
             value={input}
         />
      <FlatList
            data={results}
            renderItem={renderItem}
            keyExtractor={(item) => item.imdbID}
            extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
  paragraph: {
      fontSize: 14,
    },
});

export default ListFilms;
