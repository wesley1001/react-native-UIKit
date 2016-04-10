import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Close from './close'

const Message = () => (
  <View style={styles.row}>
    <Text style={styles.text}>I am the message text here</Text>
    <Close/>
  </View>
);

var styles = StyleSheet.create({
  row: {
    backgroundColor: '#1c7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 2
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',

  }
})

export default Message;
