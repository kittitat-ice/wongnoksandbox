import React from 'react';
import {View} from 'react-native';

const defaultProps = {
  color: '#ddd',
  lineWidth: 1,
  size: '100%',
};

const LineSeperator = ({vertical, color, lineWidth, ...props}) => (
  <View
    {...props}
    style={[
      {
        width: !vertical
          ? defaultProps.size
          : lineWidth
          ? lineWidth
          : defaultProps.lineWidth,
        height: vertical
          ? defaultProps.size
          : lineWidth
          ? lineWidth
          : defaultProps.lineWidth,
        backgroundColor: color || defaultProps.color,
      },
      props.style,
    ]}>
    {props.children}
  </View>
);

export default LineSeperator;
