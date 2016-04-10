import React, {
  Component,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


const GalleryItem = ({key, uri}) => (
  <View style={styles.thumb} key={key}>
    <Image style={styles.img} source={{uri: uri}} />
  </View>
);

export default GalleryItem;

var styles = StyleSheet.create({

})
