import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function StatisticsScreen() {
  return (
    <View style={styles.container}>
        <Text>İSTATİSTİKLER EKRANI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

