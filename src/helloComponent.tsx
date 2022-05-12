import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HelloComponent = () => {
  return (
    <View style={styles.helloContainer}>
      <Text style={styles.helloText}> Hello </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  helloContainer: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  helloText: {
    color: 'green',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default HelloComponent;
