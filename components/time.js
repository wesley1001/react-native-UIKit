import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import moment from 'moment'

const Time = ({timestamp}) => (
  <Text style={styles.time}>{moment(timestamp).format('LT')}</Text>
);

export default Time;

var styles = StyleSheet.create({
  time: {

  }
});
