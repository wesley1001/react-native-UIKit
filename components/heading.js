import React, {
  Component,
  StyleSheet,
  Text,
} from 'react-native';

const Heading = ({level, size, weight, children}) => (
  <Text style={[styles.title, {fontSize: size, fontWeight: weight}, ]}>{children}</Text>
)

Heading.propTypes = {
  /** Doubles the visual size - useful for marketing pages */
  big: React.PropTypes.bool,
  /** Heading level, e.g. level={1} for <h1> */
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /** Visual size of heading */
  // size: React.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  size: React.PropTypes.number
}

Heading.defaultProps = {
  level: 2
}
export default Heading;

var styles = StyleSheet.create({
  title: {
    marginLeft: 10,
    fontWeight: 'bold',
  }
})
