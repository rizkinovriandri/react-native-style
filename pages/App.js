import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {Heading} from '../components';
import {LogoInalum} from '../assets';

const App = () => (
  <View style={styles.container}>
    <Heading text="Hello Inalum" />
    <Image source={LogoInalum} style={styles.image} />
    <Heading text="Selamat datang di aplikasi mobile Inalum" />
    <Text style={styles.paragraph}>
      PT Indonesia Asahan Aluminium atau lebih dikenal sebagai Inalum merupakan
      BUMN pertama dan terbesar Indonesia yang bergerak dibidang peleburan
      Aluminium.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4e932',
    flex: 1,
    padding: 40,
    display: 'flex',
    justifyContent: 'space-between'
  },
  image: {
    width: '100%',
  },
  paragraph: {
    paddingTop: 20,
  }
})

export default App;
