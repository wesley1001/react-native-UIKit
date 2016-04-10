


const Thumb = () => (
  <Image
    style={{width: width/2.2, height: width/2.4, margin:5, alignItems:'center', flexDirection: 'row', borderRadius:3, }}
    source={{uri: this.props.data.src}}
  />
);


var ThumbGrid = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var data = [
        {'name': 'row 1', 'age': 3, 'src':'https://www.prettylittlething.com/media/banner_1453748445.gif'},
        {'name': 'row 2', 'age': 33, 'src':'https://www.prettylittlething.com/media/catalog/product/cache/1/small_image/250x398/9df78eab33525d08d6e5fb8d27136e95/c/l/clp5628_-9main.jpg'},
        {'name': 'row 3', 'age': 22, 'src':'https://www.prettylittlething.com/media/banner_1453807834.gif'},
        {'name': 'row 3', 'age': 22, 'src':'https://www.prettylittlething.com/media/catalog/product/cache/1/small_image/250x398/9df78eab33525d08d6e5fb8d27136e95/c/l/clq0681_-20main.jpg'},
        {'name': 'row 3', 'age': 22, 'src':'https://www.prettylittlething.com/media/catalog/product/cache/1/small_image/250x398/9df78eab33525d08d6e5fb8d27136e95/c/l/clp9747_main.jpg'},
        {'name': 'row 1', 'age': 3, 'src':'http://lorempixel.com/400/200/animals/'},
        {'name': 'row 2', 'age': 33, 'src':'http://lorempixel.com/400/200/people/'},
        {'name': 'row 3', 'age': 22, 'src':'http://lorempixel.com/400/200/'}
    ];

    return {
      dataSource: ds.cloneWithRows(data),
    };
  },
  render: function() {
  //  const { data } = this.props.route;
    return (
        <View style={{flex:1, backgroundColor: '#111', paddingTop: 20}}>
        <ListView
          contentContainerStyle={{justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <MyRow data={rowData}/>}
          pageSize={1}
        />
      </View>
    );
  }
});
