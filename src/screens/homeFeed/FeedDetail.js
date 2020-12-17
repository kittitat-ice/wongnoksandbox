import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {getFeedDetail} from '@redux/actions';

const FeedDetail = ({feedDetail, navigation, route, ...props}) => {
  useEffect(() => {
    props.getFeedDetail(route.params._id);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          style={styles.image}
          source={{
            uri: feedDetail.image ? feedDetail.image[0].img_name : null,
          }}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.labelName}>{feedDetail.store_name}</Text>
          <Text style={styles.labelDetail}>{feedDetail.detail}</Text>
          <Text style={styles.labelDetail}>{''}</Text>
          <Text style={styles.labelDetail}>{feedDetail.condition}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonLabel}>{'MAP'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  feedDetail: state.feed.feedDetail,
});

const mapDispatchToProps = {
  getFeedDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  bodyContainer: {
    marginLeft: 15,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: null,
    aspectRatio: 2.5,
    backgroundColor: 'skyblue',
  },
  labelName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#77c',
    marginTop: 10,
  },
  labelDetail: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 20,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#77c',
    paddingVertical: 8,
    marginVertical: 20,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
