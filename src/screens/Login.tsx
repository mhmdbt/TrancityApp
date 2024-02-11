import React, {useState, Component} from 'react';
import { Alert, Image, StyleSheet, TextInput, View } from "react-native";
import Button from '../components/Button.tsx';
import {useNavigation} from "@react-navigation/native";

const LoginScreen = ({}) => {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../images/appLogo.png')} />
      <TextInput
        style={styles.input}
        accessible={true}
        accessibilityHint={'Username'}
        onChangeText={setUser}
        value={user}
        placeholderTextColor={'grey'}
        placeholder={'Username'}
      />
      <TextInput
        style={styles.input}
        accessible={true}
        accessibilityHint={'Password'}
        onChangeText={setPass}
        value={pass}
        placeholderTextColor={'grey'}
        placeholder={'Password'}
      />
      <Button style={styles.btn} title={'Login'} onPress={() => {pass === 'Admin' && user === 'Admin' ? navigation.navigate('Home') : user != 'Admin' && user != '' ? Alert.alert('User not registered') : Alert.alert('Fill in all the required fields')}} />
      <Button style={styles.btn} title={'Signup'} onPress={() => {pass === '' || user === '' ? Alert.alert('Fill in all required fields!') : user === 'Admin' ? Alert.alert('User already registered') : navigation.navigate('Home')}} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    width: '80%',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    height: 30,
    marginBottom: 10,
  },
  btn: {
    width: 150,
    marginBottom: 10,
    borderRadius: 50,
  },
});
