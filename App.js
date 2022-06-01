import React, {Component} from 'react';
import {StyleSheet, View, Button, Text, SafeAreaView} from 'react-native';
import ListAlarms from './components/ListAlarm';
import TimePicker from './components/TimePicker';

class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.heading}> Alarm App </Text>
        <SafeAreaView style={styles.listAlarms}>
            <ListAlarms/>
        </SafeAreaView>

        <View style={styles.timePicker}>
          <TimePicker/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    // fontWeight: "bold",
    fontSize: 25,
    padding: 20,
  },
  timePicker: {
    paddingTop: '10%',
    width: '50%',
    // right: '10%',
    bottom: 20,
  },
  listAlarms: {
    flex: 1,
    width: '100%',
  },
});

export default App;