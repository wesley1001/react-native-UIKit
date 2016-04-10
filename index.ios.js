/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView
} from 'react-native';

//import Heading from './components/heading'
import Divider from './components/divider'
//import Avatar from './components/avatar'
import Card from './components/card'
import Button from './components/button'
//import DateItem from './components/date'
import MediaBlock from './components/media-block'
import Close from './components/close'
import Message from './components/message'
import LikeBtn from './components/like-btn'

import Gallery from './components/gallery'
import InputField from './components/input-field'

import Calendar from './components/CalendarIOS'
import ThumbGrid from './components/thumbgrid'

const App = () => (
    <ScrollView style={styles.container}>

    <ThumbGrid/>

      <Calendar
        scrollEnabled={true}              // False disables swiping. Default: True
        showControls={true}               // False hides prev/next buttons. Default: False
        titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
        dayHeadings={['S', 'M', 'T', 'W', 'T', 'F', 'S']}               // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
        prevButtonText={'Prev'}           // Text for previous button. Default: 'Prev'
        nextButtonText={'Next'}           // Text for next button. Default: 'Next'
        onDateSelect={(date) => this.onDateSelect(date)} // Callback after date selection
        onTouchPrev={this.onTouchPrev}    // Callback for prev touch event
        onTouchNext={this.onTouchNext}    // Callback for next touch event
        onSwipePrev={this.onSwipePrev}    // Callback for back swipe event
        onSwipeNext={this.onSwipeNext}    // Callback for forward swipe event
        eventDates={['2015-07-01']}       // Optional array of moment() parseable dates that will show an event indicator
        startDate={'2016-04-01'}          // The first month that will display. Default: current month
        selectedDate={'2015-08-15'}       // Day to be selected
        customStyle={{day: {fontSize: 15, textAlign: 'center'}}} // Customize any pre-defined styles
       />
      {/*<Gallery/>*/}

      <View style={styles.block}>

        <MediaBlock src={'https://facebook.github.io/react/img/logo_og.png'}
          heading={'HYPEBEAST'}
          timestamp={1460227647478}
          />

        <Text style={styles.mainTitle}>Title goes Here</Text>

        <Card
          src='http://questgarden.com/84/77/7/090712062416/images/Purple%20Mountain%20Magesties.jpg'
          title="This is the article description title here saying stuff"/>

        <Divider/>

        <View style={styles.shareContainer}>
          <Text>Like</Text>
          <Text>Comment</Text>
          <Text>Share</Text>
        </View>
      </View>

      <View style={styles.block}>
        <InputField/>
        <LikeBtn liked={true} likes={232} toggle={() => alert('liked')}/>
        <Button radius={5}>Submit</Button>
        <Close/>
        <Message/>
      </View>

    </ScrollView>
);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#D3D5DA',
    marginTop: 20,
  },
  // header
  mainTitle: {
    fontSize:20,
    marginVertical: 10,
    fontWeight: '400'
  },

  titleContainer: {
    flexDirection: 'column'
  },
  date: {
    marginLeft: 10,
    marginTop: 5,
  },
  thumb: {
    width:50,
    height:50,
    //flex:1,
  },
  // card
  block: {
    padding: 12,
    backgroundColor: '#fff',
    shadowColor: '#D8D8D8',
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    marginBottom: 40
  },

  // seperator: line
  seperator: {
    borderTopWidth: 1,
    borderColor: '#D8D8D8',
    height: 1,
    flex:1,
    marginVertical: 15,
  },
  // lowerSection
  shareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
});

AppRegistry.registerComponent('Experiments', () => App);
