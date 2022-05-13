import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {PokemonInfoBoxComponent} from './PokemonInfoBoxComponent';
import pokemonList from './pokemons.json';

const PokemonListComponent = () => {
  return (
    <View style={styles.pokemonListContainer}>
      <Text style={styles.pokemonListHeader}>Welcome to the pokemon world</Text>
      <ScrollView>
        {pokemonList.results.map((pokemonInfo: {name: string; url: string}) => (
          <PokemonInfoBoxComponent
            key={pokemonInfo.url}
            name={pokemonInfo.name}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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

export {PokemonListComponent};
