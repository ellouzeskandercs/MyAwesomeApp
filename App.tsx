import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PokemonListComponent} from './src/PokemonListComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.App}>
      <PokemonListComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
  },
});

export default App;
