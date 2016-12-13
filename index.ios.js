/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';

// import TabBar from './components/TabBar';

export default class SmartNode extends Component {
  render() {
    return (
        <TabBarIOS>
        <TabBarIOS.Item
            title = 'My Node'
            icon = { require('./assets/img/ico_node.png') }
            selected = { this.props.mainTab === 0 }
            onPress = { () => this.setMainTab(0) }
        >
        </TabBarIOS.Item>
        <TabBarIOS.Item
            title = 'Preference'
            icon = { require('./assets/img/ico_preference.png') }
            selected = { this.props.mainTab === 1 }
            onPress = { () => this.setMainTab(1) }
        >
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
console.log('hey');
const styles = StyleSheet.create({

});

AppRegistry.registerComponent('SmartNode', () => SmartNode);
