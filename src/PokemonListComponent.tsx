import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

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
        <PokemonInfoBox name="pokemon 1" />
        <PokemonInfoBox name="pokemon 2" />
        <PokemonInfoBox name="pokemon 3" />
        <PokemonInfoBox name="pokemon 4" />
        <PokemonInfoBox name="pokemon 5" />
        <PokemonInfoBox name="pokemon 6" />
        <PokemonInfoBox name="pokemon 7" />
        <PokemonInfoBox name="pokemon 8" />
        <PokemonInfoBox name="pokemon 9" />
        <PokemonInfoBox name="pokemon 10" />
        <PokemonInfoBox name="pokemon 11" />
        <PokemonInfoBox name="pokemon 12" />
        <PokemonInfoBox name="pokemon 13" />
        <PokemonInfoBox name="pokemon 14" />
        <PokemonInfoBox name="pokemon 15" />
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
