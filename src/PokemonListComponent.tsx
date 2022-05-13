import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {PokemonInfoBoxComponent} from './PokemonInfoBoxComponent';
import pokemonList from './pokemons.json';

const PokemonListComponent = () => {
  const renderPokemonInfoBox = ({
    item,
  }: {
    item: {name: string; url: string};
  }) => {
    return <PokemonInfoBoxComponent key={item.url} name={item.name} />;
  };

  return (
    <View style={styles.pokemonListContainer}>
      <Text style={styles.pokemonListHeader}>Welcome to the pokemon world</Text>
      <FlatList
        data={pokemonList.results}
        keyExtractor={item => item.url}
        renderItem={renderPokemonInfoBox}
      />
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
