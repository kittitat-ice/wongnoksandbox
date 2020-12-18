import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {TabView, TabBar} from 'react-native-tab-view';

const routes = [
  {key: '0', title: 'About Me'},
  {key: '1', title: 'Skill & Exp'},
  {key: '2', title: 'Social'},
];

const UserProfile = ({userData, navigation, ...props}) => {
  const [index, setIndex] = React.useState(0);

  const renderTabScreen = () => {
    switch (index) {
      case 0:
        return (
          <View style={{flex: 1}}>
            <Text>ABOUT ME</Text>
          </View>
        );
      case 1:
        return (
          <View style={{flex: 1}}>
            <Text>Skill</Text>
          </View>
        );
      case 2:
        return (
          <View style={{flex: 1}}>
            <Text>Soc</Text>
          </View>
        );

      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.header}>
          <Text>{userData.name}</Text>
        </View>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderTabScreen}
          renderTabBar={(tabbarProps) => (
            <TabBar
              {...tabbarProps}
              indicatorStyle={styles.tabbarIndicator}
              style={{backgroundColor: '#fff'}}
              labelStyle={{color: 'black'}}
            />
          )}
          onIndexChange={setIndex}
          initialLayout={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user.userData,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'beige',
  },
  tabbarIndicator: {
    backgroundColor: 'tomato',
    height: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
