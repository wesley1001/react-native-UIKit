import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';

import Heading from './heading'
import Avatar from './avatar'
import DateItem from './date'

const MediaBlock = ({src, timestamp, heading}) => (
  <View style={styles.header}>
    <Avatar
      circle={false}
      size={48}
      src="https://facebook.github.io/react/img/logo_og.png"
    />
    <View style={styles.titleContainer}>
      <Heading size={20} weight={'bold'}>HYPEBEAST</Heading>
      <DateItem timestamp={timestamp}/>
    </View>
  </View>
);

var styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //justifyContent: 'space-between',
    flex:1,
    //backgroundColor: 'blue',
  },
});
export default MediaBlock;
