/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
//  StyleSheet,
  TabBarIOS,
  Text,
} from 'react-native';

// import TabBar from './components/TabBar';

export default class SmartNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'node',
    };
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="My Node"
          icon={require('./assets/img/ico_node.png')}
          selected={this.state.currentTab === 'node'}
          onPress={() => {
            this.setState({
              currentTab: 'node',
            });
          }}
        >
          <Text>My Node</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Preferences"
          icon={require('./assets/img/ico_settings.png')}
          selected={this.state.currentTab === 'preferences'}
          onPress={() => {
            this.setState({
              currentTab: 'preferences',
            });
          }}
        >
          <Text>Preferences</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

/*
const styles = StyleSheet.create({

});
*/

AppRegistry.registerComponent('SmartNode', () => SmartNode);