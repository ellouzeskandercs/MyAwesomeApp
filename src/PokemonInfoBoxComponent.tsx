import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const PokemonInfoBoxComponent = (props: {name: string}) => {
  return (
    <View style={styles.pokemonInfoBox}>
      <Text style={styles.pokemonBoxText}> {props.name} </Text>
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
});

export {PokemonInfoBoxComponent};
