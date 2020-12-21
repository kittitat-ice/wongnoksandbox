import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import * as ROUTE from '@navigation/routeName';
import {getFeed} from '@redux/actions';
import {connect} from 'react-redux';
import ScrollPercentBar from '@components/ScrollPercentBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dot from '@components/common/Dot';

const Home = ({feed, userData, navigation, ...props}) => {
  const [scrollPercent, setScrollPercent] = useState('0%');

  useEffect(() => {
    props.getFeed();
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTE.CONCALL)}
          style={styles.concallButton}>
          <Ionicons name="videocam" size={24} color="#fff" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTE.USER_PROFILE)}>
          <Image style={styles.avatar} source={{uri: userData.avatar}} />
          <Dot
            size={16}
            color="#77c"
            style={{
              position: 'absolute',
              right: 5,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Dot size={12} color="#f00" />
          </Dot>
        </TouchableOpacity>
      ),
    });
  }, []);

  const renderUser = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate(ROUTE.FEED_DETAIL, {_id: item.id})}>
        <Image
          style={styles.image}
          source={{
            uri: item.main_picture,
          }}
        />
        <View style={styles.content}>
          <Text style={styles.h}>{item.short_promote}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollPercentBar scrollPercent={scrollPercent} />
      <FlatList
        keyExtractor={(item, index) => `home-feed-list-${index}`}
        style={{backgroundColor: '#eee'}}
        data={feed}
        renderItem={(data) => renderUser(data)}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        ListFooterComponent={() => <View style={{height: 10}} />}
        onScroll={({nativeEvent}) =>
          setScrollPercent(
            `${Math.max(
              0,
              Math.min(
                100,
                Math.floor(
                  (nativeEvent.contentOffset.y /
                    (nativeEvent.contentSize.height -
                      nativeEvent.layoutMeasurement.height)) *
                    100,
                ),
              ),
            )}%`,
          )
        }
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  feed: state.feed.feed,
  userData: state.user.userData,
});

const mapDispatchToProps = {
  getFeed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    backgroundColor: '#77c',
    width: 32,
    height: 32,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  concallButton: {
    //backgroundColor: 'tomato',
    width: 40,
    height: 40,
    borderRadius: 50,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: null,
    aspectRatio: 2,
    backgroundColor: 'skyblue',
  },
  itemContainer: {
    marginHorizontal: 5,
    backgroundColor: '#686',
  },
  content: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  h: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  p: {
    fontSize: 12,
    marginTop: 3,
    marginLeft: 5,
  },
  labelWebsite: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  p2: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});
