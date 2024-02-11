import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import Button from './Button.tsx';
import Routes from './Routes.tsx';

export const SearchBar = () => {
  const [route, setRoute] = useState('');
  const [chosen, setChosen] = useState('');

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          accessible={true}
          accessibilityHint={'Search...'}
          onChangeText={setRoute}
          value={route}
        />
        <Button
          onPress={() => {
            setChosen(route);
          }}
          style={styles.searchBtn}
          title="Search"
        />
      </View>
      <Routes route={chosen} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'center',
    margin: 5,
  },

  searchBar: {
    borderStyle: 'solid',
    borderWidth: 0.2,
    borderRadius: 100,
    width: '80%',
  },

  searchBtn: {
    borderRadius: 100,
    marginLeft: 5,
  },
});
