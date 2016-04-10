import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const LikeBtn = ({liked, likes, toggle}) => (
  <TouchableOpacity onPress={toggle}>
    <Text>{liked ? 'Like' : 'Like This'}</Text>
    <Text>{likes}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({

});

export default LikeBtn;
