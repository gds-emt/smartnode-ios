import React from 'react';
import {
  AppRegistry,
//  StyleSheet,
  TabBarIOS,
//  Text,
} from 'react-native';

import MyNode from './components/MyNode';
import Preferences from './components/Preferences';

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
          <MyNode />
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
          <Preferences />
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
