import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import HelloComponent from './src/HelloComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.App}>
      <HelloComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
