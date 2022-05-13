import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import pokemonList from './pokemons.json';

const PokemonInfoBox = (props: {name: string}) => {
  return (
    <View style={styles.pokemonInfoBox}>
      <Text style={styles.pokemonBoxText}> {props.name} </Text>
    </View>
  );
};

const PokemonListComponent = () => {
  return (
    <View style={styles.pokemonListContainer}>
      <Text style={styles.pokemonListHeader}>Welcome to the pokemon world</Text>
      <ScrollView>
        {pokemonList.results.map((pokemonInfo: {name: string; url: string}) => (
          <PokemonInfoBox name={pokemonInfo.name} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonInfoBox: {
    marginTop: 10,
    height: 40,
    width: '100%',
    borderRadius: 8,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonBoxText: {
    fontSize: 18,
  },
  pokemonListContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
  },
  pokemonListHeader: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default PokemonListComponent;
