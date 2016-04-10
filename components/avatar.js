import React, {
  Component,
  StyleSheet,
  Image,
} from 'react-native';

const Avatar = ({src, size, circle}) => (
  <Image source={{uri: src}} style={{height: size, width: size, borderRadius: circle ? size/2 : 0}} />
);

export default Avatar;
