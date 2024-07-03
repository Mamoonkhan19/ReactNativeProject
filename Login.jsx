import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import HederScreen from '../compunet/HederScreen'

const Login = ({navigation}) => {
  const [names, setNames] = useState('')
  const [emails, setEmails] = useState('')

  const handleLogin = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.main}>
      <HederScreen Name={"login"} />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={names}
          onChangeText={(text) => setNames(text)}
          placeholder='Enter your Name'
        />

        <TextInput
          style={styles.input}
          value={emails}
          onChangeText={(text) => setEmails(text)}
          placeholder='Enter your email'
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f9fa', // Light background color
  },
  form: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    marginTop:200,
    backgroundColor: '#ffffff', // White background for form
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
