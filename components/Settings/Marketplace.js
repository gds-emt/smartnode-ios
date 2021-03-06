import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import client from './../../lib/api-client';

const styles = StyleSheet.create({
  viewMarketplace: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
    flex: 1,
  },

  viewVendor: {
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fcfcfc',
  },
  viewVendorHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  viewAvatar: {
    flex: 1,
  },
  viewDetails: {
    flex: 5,
    paddingHorizontal: 10,
  },
  viewVendorRequest: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },

  imgIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: '#ccc',
    borderWidth: 1,
  },

  txtTitleAddress: {
    fontSize: 26,
    color: '#000',
  },
  txtDescriptionAddress: {
    fontSize: 12,
    color: '#666',
  },
  txtAddress: {
    fontSize: 11,
    color: '#999',
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtTime: {
    fontSize: 14,
    paddingTop: 2,
    color: '#666',
  },
  txtDescription: {
    fontSize: 16,
    color: '#666',
    paddingTop: 2,
  },

  txtRequestsList: {
    marginTop: 20,
    fontSize: 12,
    color: '#888',
  },
  txtRequest: {
    fontSize: 15,
    color: '#5481D8',
  },

});

export default class Marketplace extends React.Component {
  constructor(props) {
    super(props);
    this.procure = this.procure.bind(this);
  }

  procure(vendor, params) {
    this.props.SmartNode.setState({
      currentTab: 'node',
    });

    return client.services(vendor, params);
  }

  render() {
    return (
      <View style={styles.viewMarketplace}>
        <Text style={styles.txtTitleAddress}>Marketplace</Text>
        <Text style={styles.txtDescriptionAddress}>Available services</Text>

        <View style={styles.viewVendor}>
          <View style={styles.viewVendorHeader}>
            <View style={styles.viewAvatar}>
              <Image style={styles.imgIcon} source={{ uri: 'https://pbs.twimg.com/profile_images/743759173834334209/GcCRFPRh.jpg' }} />
            </View>
            <View style={styles.viewDetails}>
              <Text style={styles.txtTitle}>honestbee</Text>
              <Text style={styles.txtDescription}>Concierge and Delivery Service</Text>
            </View>
          </View>

          <View style={styles.viewVendorRequests}>
            <Text style={styles.txtRequestsList}>REQUESTS LIST</Text>
            <TouchableHighlight
              onPress={() => {
                this.procure('honestbee', {
                  value: 2100000000000000000,
                  description: '5x Cafedirect Explorers Collection Capsules',
                  params: { order_id: 2 },
                });
              }}
            >
              <View style={styles.viewVendorRequest}>
                <Text style={styles.txtRequest}>Purchase 5x Cafedirect Explorers Collection Capsules</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                this.procure('honestbee', {
                  value: 4000000000000000000,
                  description: 'Double A A4 White Paper (5 Packs)',
                  params: { order_id: 1 },
                });
              }}
            >
              <View style={styles.viewVendorRequest}>
                <Text style={styles.txtRequest}>Purchase Double A A4 White Paper (5 Packs)</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

