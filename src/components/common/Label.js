import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Label = (props) => (
  <Text {...props} style={[styles.label, props.style]}>
    {props.children}
  </Text>
);

export default Label;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: 'Prompt-Regular',
  },
});
