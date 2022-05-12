import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HelloComponent = () => {
  return (
    <View style={styles.HelloContainer}>
      <Text style={styles.helloText}> Hello </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HelloContainer: {
    paddingHorizontal: 24,
    paddingVertical: 6,
    backgroundColor: 'red',
  },
  helloText: {
    color: 'green',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default HelloComponent;
