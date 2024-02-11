import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Button from './Button.tsx';
import {useNavigation} from '@react-navigation/native';

const Header = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('../images/appLogo.png')}
      />
      <Button
        style={styles.profileBtn}
        iconLeft={
          <Image
            style={styles.profileBtnImg}
            source={require('../images/profileIcon.png')}
          />
        }
        onPress={() => navigation.navigate('Login')}
      />
      <Text style={styles.title}>Welcome to{'\n'}Trancity</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  profileBtn: {
    width: 0,
    height: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 70,
    right: 12,
    borderRadius: 100,
  },
  profileBtnImg: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
  },
  backgroundImage: {
    opacity: 0.1,
    position: 'absolute',
    zIndex: -1,
    top: -100,
    right: 10,
  },
});
