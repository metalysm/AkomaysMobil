import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function SettingScreen() {
  return (
    <View style={styles.container}>
        <Text>AYARLAR EKRANI</Text>
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

