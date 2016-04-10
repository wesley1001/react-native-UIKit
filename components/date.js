import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
} from 'react-native';

import moment from 'moment'

const DateItem = ({timestamp}) => (
  <Text style={styles.date}>
    {moment(timestamp).fromNow()}
  </Text>
);

export default DateItem;

var styles = StyleSheet.create({
  date: {
    marginLeft: 10,
    marginTop: 5,
  },
});
