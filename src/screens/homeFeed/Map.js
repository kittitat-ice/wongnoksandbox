import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';

const Map = ({feedDetail, navigation, ...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={{flex: 1}}
        //provider="google"
        initialRegion={{
          latitude: parseFloat(feedDetail.lat),
          longitude: parseFloat(feedDetail.lng),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <Marker
          coordinate={{
            latitude: parseFloat(feedDetail.lat),
            longitude: parseFloat(feedDetail.lng),
          }}
          title={feedDetail.store_name}
          //description={feedDetail.detail}
        />
      </MapView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  feedDetail: state.feed.feedDetail,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
