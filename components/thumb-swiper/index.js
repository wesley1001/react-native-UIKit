
const THUMBS = [
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
  'http://dummyimage.com/200x200/eee/fff',
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

const Thumb = ({key, uri}) => (
  <Image key={key} style={styles.img} source={{uri: uri}} />
);
const createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

const ThumbSwiper = () => (
  <ScrollView
    horizontal={true}
    decelerationRate={'fast'}
    directionalLockEnabled={true}
    //pagingEnabled={true} // NOTE jumps to next
    showsHorizontalScrollIndicator={false}
    removeClippedSubviews={true} // NOTE experimental feature
    ref={(scrollView) => { _scrollView = scrollView; }}
    automaticallyAdjustContentInsets={false}
    onScroll={() => { console.log('onScroll!'); }}
    scrollEventThrottle={200}
    contentContainerStyle={styles.scrollView}>
    {THUMBS.map(createThumbRow)}
  </ScrollView>
);

export default ThumbSwiper;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
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
    //width: width/3,
    //height: width/3,
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
    width: width/3.05,
    height: width/3.05,
    marginRight: width/3*0.025,
    marginBottom: width/3*0.025
  }
})
