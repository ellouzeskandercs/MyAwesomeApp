import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.App} />;
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
