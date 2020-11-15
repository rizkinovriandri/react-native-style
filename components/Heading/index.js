import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Heading = ({text}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: '#2c9f45',
    fontFamily: 'Lato-Bold',
  },
});

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
