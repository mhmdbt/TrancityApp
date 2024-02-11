import React from 'react';
import {Image, StyleSheet, View } from "react-native";

const Routes = ({route}) => {
  return (
    <View>
      <Image
        style={styles.routeImg}
        source={
          route === 'Daoura'
            ? require('../images/daoura.jpeg')
            : route === 'Hamra'
            ? require('../images/hamra.jpeg')
            : require('../images/currentLocation.jpeg')
        }
      />
    </View>
  );
};

export default Routes;

const styles = StyleSheet.create({
  routeImg: {
    width: 380,
    height: 380,
    alignSelf: 'center',
    marginTop: 60,
  },
});
