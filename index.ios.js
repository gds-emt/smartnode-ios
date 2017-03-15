import React from 'react';
import {
  AppRegistry,
//  StyleSheet,
  StatusBar,
  TabBarIOS,
//  Text,
} from 'react-native';

import MyNode from './components/MyNode';
import Settings from './components/Settings';

export default class SmartNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // currentTab: 'node', // only during dev of settings tab
      currentTab: 'settings',
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
            StatusBar.setBarStyle('light-content');
            this.setState({
              currentTab: 'node',
            });
          }}
        >
          <MyNode />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Settings"
          icon={require('./assets/img/ico_gear.png')}
          selected={this.state.currentTab === 'settings'}
          onPress={() => {
            StatusBar.setBarStyle('dark-content');
            this.setState({
              currentTab: 'settings',
            });
          }}
        >
          <Settings SmartNode={this} />
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
