import React from 'react';
import {Animated, Text, TextInput, View} from 'react-native';
import SearchBar from '../components/Search.tsx';
import ScrollView = Animated.ScrollView;
import Header from '../components/Header.tsx';

const HomeScreen = ({navigation, route}) => {
  return (
    <View>
      <Header />
      <ScrollView>
        <SearchBar />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
