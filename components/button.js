import React, {
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Button = ({children, radius}) => (
  <TouchableOpacity style={[styles.btn, {borderRadius: radius || 0}]}>
    <Text style={styles.text}>
      {children}
    </Text>
  </TouchableOpacity>
);

var styles = StyleSheet.create({
  btn: {
    backgroundColor: '#08e',
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center'
  }
});

export default Button;
