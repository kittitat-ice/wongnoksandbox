import React from 'react';
import Label from './Label';

const LabelBold = (props) => (
  <Label {...props} style={[{fontFamily: 'Prompt-Bold'}, props.style]}>
    {props.children}
  </Label>
);

export default LabelBold;
