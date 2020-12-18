import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {TabView, TabBar} from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Label from '@components/common/Label';
import LabelBold from '@components/common/LabelBold';

const routes = [
  {key: 0, title: 'About Me'},
  {key: 1, title: 'Skill & Exp'},
  {key: 2, title: 'Social'},
];

const UserProfile = ({userData, navigation, ...props}) => {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    navigation.setOptions({
      title: userData.username,
    });
  }, []);

  const HeaderContent = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerCard}>
          <Image source={{uri: userData.avatar}} style={styles.avatar} />
          <LabelBold
            style={{fontSize: 18, color: 'tomato', textAlign: 'center'}}>
            {userData.name + ' ' + userData.lastname}
          </LabelBold>
          <Label style={{fontFamily: 'Prompt-Italic'}}>
            {userData.shortintro}
          </Label>
          <Label>{'Friend: ' + userData.numfriend}</Label>
          <Label>{userData.isonline ? 'ONLINE' : 'OFFLINE'}</Label>
        </View>
      </View>
    );
  };

  const TabViewContent = () => {
    switch (index) {
      case 0:
        return (
          <View style={styles.contentContainer}>
            <Label style={{fontStyle: 'italic'}}>
              {userData.about.aboutme}
            </Label>
            <LabelBold style={{marginTop: 10}}>{'User Information'}</LabelBold>
            <View style={styles.rowContent}>
              <Label style={{flex: 1}}>{userData.about.email}</Label>
              <Label style={{flex: 1, textAlign: 'right'}}>
                {userData.about.phone}
              </Label>
            </View>
          </View>
        );
      case 1:
        return (
          <View style={styles.contentContainer}>
            <Label>Skill</Label>
          </View>
        );
      case 2:
        return (
          <View style={styles.contentContainer}>
            <Label>Soc</Label>
          </View>
        );
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[1]}>
        <HeaderContent />
        <TabView
          navigationState={{index, routes}}
          renderScene={() => <View />}
          renderTabBar={(tabbarProps) => (
            <TabBar
              {...tabbarProps}
              indicatorStyle={styles.tabbarIndicator}
              style={{backgroundColor: '#fff'}}
              activeColor="#77c"
              inactiveColor="#ccc"
              renderIcon={({route, focused, color}) => (
                <Ionicons
                  name={
                    route.key === 0
                      ? 'finger-print-outline'
                      : route.key === 1
                      ? 'bulb-outline'
                      : route.key === 2
                      ? 'chatbubble-outline'
                      : null
                  }
                  color={color}
                  size={22}
                />
              )}
              renderLabel={({route, focused, color}) => (
                <Label style={{color, fontSize: 14}}>{route.title}</Label>
              )}
            />
          )}
          onIndexChange={setIndex}
          initialLayout={{
            width: Dimensions.get('window').width,
          }}
        />
        <TabViewContent />
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
  rowContent: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  header: {
    backgroundColor: '#a7c5eb',
  },
  headerCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: '#77c',
  },
  tabbarIndicator: {
    backgroundColor: '#77c',
    height: 5,
    //borderTopLeftRadius: 8,
    //borderTopRightRadius: 8,
  },
});
