import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const Card = ({src, title}) => (
  <View style={styles.cardShadow}>
    <View style={styles.card}>
      <View style={styles.clipRadius}>
        <TouchableOpacity onPress={() => alert('pressed..')}>
          <Image source={{uri: src}} style={styles.img}/>
        </TouchableOpacity>
        <View style={styles.imgBorderBtm}></View>
        <View style={styles.lowerSection}>
          <Text style={styles.title}>{title} </Text>
          <Text style={styles.subTitle}>Title here ... </Text>
        </View>
      </View>
    </View>
  </View>
);

export default Card;

var styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: '#D8D8D8',
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.6,
  //  overflow: 'hidden'
  },
  cardShadow: {
  },
  clipRadius: {
    borderRadius: 4,
    overflow: 'hidden'
  },
  lowerSection: {
    padding: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '500'
  },
  subTitle: {
    fontSize: 15,
    marginTop:5
  },
  img: {
    //borderRadius: 4,
    height: 200,
    resizeMode: 'cover'
  },
  imgBorderBtm: {
    borderColor: '#D8D8D8',
    borderTopWidth: 1,
    height: 1,
  }

})
