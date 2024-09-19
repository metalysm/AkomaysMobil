import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/ibb-arka-mavi.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Burak Demir</Text>
        <Text style={styles.email}>burak.demir@example.com</Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <MaterialIcons name="edit" size={24} color="#fff" />
        <Text style={styles.editText}>Profili Düzenle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 18,
    color: '#777',
    marginTop: 8,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#17469F',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  editText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});
