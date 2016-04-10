import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

const Thumb = ({data}) => (
  <Image
    style={{width: width/3.05, height: width/3.05, alignItems:'center', marginBottom: width/3*0.025 }}
    source={{uri: data.src}}
  />
);

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var data = [
    {'name': 'row 1', 'age': 3, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 2', 'age': 33, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 3', 'age': 22, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 3', 'age': 22, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 3', 'age': 22, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 1', 'age': 3, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 2', 'age': 33, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 3', 'age': 22, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 3', 'age': 22, 'src':'http://dummyimage.com/200x200/eee/fff'},
];

class ThumbGrid extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }
  render() {
  //  const { data } = this.props.route;
    return (
        <ListView
          contentContainerStyle={{justifyContent: 'space-between', backgroundColor: '#fff', flexDirection: 'row', flexWrap: 'wrap'}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Thumb data={rowData}/>}
          pageSize={1}
        />
    );
  }
}

export default ThumbGrid;
