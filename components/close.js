import React, {
  Component,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const Close = () => (
  <TouchableOpacity>
    <Text style={styles.close}>×</Text>
  </TouchableOpacity>
);

var styles = StyleSheet.create({
  close: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 0,
    padding: 0,
    color: '#fff'
  }
})

export default Close;
