import React from 'react';
import {
  NavigatorIOS,
} from 'react-native';

import ListScene from './ListScene';

// export default class  extends React.Component {
export default function MyNode() {
  return (
    <NavigatorIOS
      initialRoute={{
        component: ListScene,
        title: 'My Node',
        navigationBarHidden: true,
      }}
      style={{ flex: 1 }}
    />
  );
}
