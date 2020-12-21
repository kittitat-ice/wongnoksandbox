import React from 'react';
import {View} from 'react-native';

const defaultProps = {
  size: 20,
  color: '#000',
};

const Dot = ({size, color, ...props}) => (
  <View
    {...props}
    style={[
      {
        width: size || defaultProps.size,
        height: size || defaultProps.size,
        borderRadius: size || defaultProps.size,
        backgroundColor: color || defaultProps.color,
      },
      props.style,
    ]}>
    {props.children}
  </View>
);

export default Dot;
