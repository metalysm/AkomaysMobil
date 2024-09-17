import { View, Button, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';

export default function LoginScreen() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const navigation = useNavigation();

    const handleLogin = () => {
      if (username === 'admin' && password === '123') {
        navigation.navigate('Home');
      } else {
        alert('Invalid credentials');
      }
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={require('C:/Users/burak.demir/RNProjects/onyuzAkomays/assets/akom.png')} />
        <Text style={styles.title}>AKOMAYS</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.formInput}>
          <Octicons name='person' size={20} color='#0005'/>
          <TextInput 
          cursorColor={'#000'}
          style={styles.input}
          value={username}
          onChangeText={username => setUsername(username)} 
          placeholder='Kullanıcı Adı'/>
        </View>
        <View style={styles.formInput}>
          <Octicons name='shield-lock' size={20} color='#0005'/>
          <TextInput 
          cursorColor={'#000'}
          style={styles.input}
          value={password}
          onChangeText={password => setPassword(password)} 
          secureTextEntry={true}
          placeholder='Şifre'/>
        </View>

        {/* Beni hatırla ve şifremi unuttum */}
        <View style={styles.options}>
          {/* Custom Checkbox */}
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <MaterialIcons
              name={rememberMe ? 'check-box' : 'check-box-outline-blank'}
              size={24}
              color="black"
            />
            <Text style={styles.rememberText}>Beni Hatırla</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotText}>Şifremi Unuttum?</Text>
          </TouchableOpacity>
        </View>

        {/* Giriş butonu */}
        <Ripple
          rippleColor='rgb(100,100,100)'
          rippleOpacity={0.5}
          rippleDuration={300}
          rippleCentered={true}
          rippleFades={false}
          rippleContainerBorderRadius={20}
          style={styles.login}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>GİRİŞ</Text>
        </Ripple>
      </View>
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
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    color: '#17469F',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 50,
  },
  form: {
    width: '90%',
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
    width: '90%',
    height: '100%',
  },
  formInput: {
    width: '100%',
    height: 55,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#dcdcdc',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    marginBottom: 10,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
  },
  forgotText: {
    color: '#17469F',
    fontSize: 14,
  },
  login: {
    padding: 15,
    backgroundColor: '#17469F',
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
  buttonText: {
    fontSize: 18,
    width: '90%',
    color: '#fff',
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

