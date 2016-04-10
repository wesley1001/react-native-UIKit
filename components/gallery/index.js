
const THUMBS = [
  'http://dullanddanger.com/wp-content/uploads/2014/09/shay-maria-57.jpg',
  'http://mevanity.com/wp-content/uploads/2015/10/modernambition-shay-maria-mdrna-instagram.jpeg',
  'http://dopamine36.com/wp-content/uploads/2013/09/Shay-maria-4.jpg',
  'https://7f9c61237bd6e732e57e-5fa18836a2ae6b5e7c49abcc89b20237.ssl.cf1.rackcdn.com/4955281_shay-maria-and-ashley-schultz-are-sizzling_c5cb80fa_m.jpg?bg=CABBC0',
  'http://cdn.rsvlts.com/wp-content/uploads/2013/01/shay-maria-dsteezy-29.jpeg',
  'http://cdn.rsvlts.com/wp-content/uploads/2013/01/shay-maria-dsteezy-28.jpeg',
  'http://swagsyndicate.com/wp-content/uploads/2010/07/loud-obnoxious-announce-agenda-campaign-1.jpg',
  'https://heavyeditorial.files.wordpress.com/2014/03/319.jpg?quality=65&strip=all&w=640',
  'http://payload389.cargocollective.com/1/5/174502/10090906/cbnc4_670.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/c7/b5/a3/c7b5a33aa1b3225f8727545eb39bd674.jpg',
  'http://imfmag.com/wp-content/uploads/2012/08/7792592148_4191fe2b87_b.jpg',
  'http://40.media.tumblr.com/d3ce5dd86ba8d83273e041b0300055d3/tumblr_inline_nr4okgFmlL1rn5se3_1280.jpg'
 ];

import React from 'react-native'

var {
  View,
  Image,
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight,
  ScrollView,
} = React;

const {
  width,
  height
} = Dimensions.get('window');

//import GalleryItem from './gallery-item';

const GalleryItem = ({key, uri}) => (
  <View style={styles.thumb} key={key}>
    <Image style={styles.img} source={{uri: uri}} />
  </View>
);
const createThumbRow = (uri, i) => <GalleryItem key={i} uri={uri} />;

const Gallery = () => (
  <ScrollView
    horizontal={true}
    decelerationRate={'fast'}
    directionalLockEnabled={true}
    pagingEnabled={true} // NOTE jumps to next
    showsHorizontalScrollIndicator={false}
    removeClippedSubviews={true} // NOTE experimental feature
    ref={(scrollView) => { _scrollView = scrollView; }}
    automaticallyAdjustContentInsets={false}
    onScroll={() => { console.log('onScroll!'); }}
    scrollEventThrottle={200}
    style={styles.scrollView}>
    {THUMBS.map(createThumbRow)}
  </ScrollView>
);

export default Gallery;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    //height: 300,
    //paddingLeft: 10
  },
  horizontalScrollView: {
    //height: 120,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  thumb: {
    // marginRight: 10,
    //paddingHorizontal: 10,
    //padding: 10,
    //borderRadius: 3,
  },
  title: {
    fontSize:20,
    marginVertical: 10,
    fontWeight: 'bold'
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    resizeMode: 'cover',
    height: 200,
    // width: width-40,
    width: width
  }
})
