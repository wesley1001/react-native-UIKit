import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';

const Divider = (props) => (
  <View style={styles.seperator}></View>
);

export default Divider;

var styles = StyleSheet.create({
  seperator: {
    borderTopWidth: 1,
    borderColor: '#D8D8D8',
    height: 1,
    flex:1,
    marginVertical: 15,
  },

});
