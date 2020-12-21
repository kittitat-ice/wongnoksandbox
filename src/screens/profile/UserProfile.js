import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {TabView, TabBar} from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Label from '@components/common/Label';
import LabelBold from '@components/common/LabelBold';
import Dot from '@components/common/Dot';
import LineSeperator from '@components/common/LineSeperator';

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

  const calculateAge = (birthday) => {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const getLevelBarColor = (num) =>
    num >= 80
      ? '#0f0'
      : num >= 60
      ? '#af0'
      : num >= 40
      ? '#ff0'
      : num >= 20
      ? '#fa0'
      : '#f00';

  const randomColor = () =>
    '#' + Math.floor(Math.random() * 16777215).toString(16);

  const HeaderContent = () => {
    return (
      <ImageBackground
        style={styles.header}
        source={{uri: 'https://placeimg.com/640/480/any'}}>
        <View style={styles.headerCard}>
          <View>
            <Image source={{uri: userData.avatar}} style={styles.avatar} />
            <Dot size={35} style={styles.dotContainer}>
              <Dot size={25} color={userData.isonline ? '#0d0' : '#bbb'} />
            </Dot>
          </View>
          <LabelBold style={styles.headerName}>{userData.username}</LabelBold>
          <Label style={{fontFamily: 'Prompt-Italic', fontSize: 12}}>
            {userData.shortintro}
          </Label>
          <Label>
            {userData.job + ', ' + calculateAge(userData.about.birthday)}
          </Label>
          <LabelBold>
            {'From '}
            <Label>{userData.from}</Label>
          </LabelBold>
          <View style={{flexDirection: 'row'}}>
            <Label>{userData.country}</Label>
            <Image
              style={{height: 18, width: 18, marginHorizontal: 5}}
              source={{
                uri:
                  'https://www.countryflags.io/' +
                  userData.countrycode +
                  '/flat/32.png',
              }}
            />
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Dot
              color="#fff"
              size={38}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: -16,
                zIndex: 1,
              }}>
              <Image
                style={{borderRadius: 32}}
                source={{
                  uri: 'https://placeimg.com/640/480/any',
                  width: 32,
                  height: 32,
                }}
              />
            </Dot>
            <Dot
              color="#fff"
              size={38}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: -16,
              }}>
              <Dot size={32} color={randomColor()} />
            </Dot>
            <Dot
              color="#fff"
              size={38}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: -1,
              }}>
              <Dot size={32} color={randomColor()} />
            </Dot>
            <View>
              <Label>
                {"You're friend with "}
                <LabelBold>{userData.numfriend.toLocaleString()}</LabelBold>
                {' People'}
              </Label>
              <Label>
                {'You have '}
                <LabelBold>{userData.follower.toLocaleString()}</LabelBold>
                {' Followers'}
              </Label>
            </View>
          </View>
        </View>
      </ImageBackground>
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
            <Label style={{marginTop: 10, fontSize: 16}}>
              {'User Information'}
            </Label>
            <View style={styles.rowContent}>
              <LabelBold style={{flex: 1}}>{'Name:'}</LabelBold>
              <Label style={{flex: 1, textAlign: 'right'}}>
                {userData.name + ' ' + userData.lastname}
              </Label>
            </View>
            <View style={styles.rowContent}>
              <LabelBold style={{flex: 1}}>{'Date of Birth:'}</LabelBold>
              <Label style={{flex: 1, textAlign: 'right'}}>
                {userData.about.birthday.toLocaleString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </Label>
            </View>
            <View style={styles.rowContent}>
              <LabelBold style={{flex: 1}}>{'Email:'}</LabelBold>
              <Label style={{flex: 1, textAlign: 'right'}}>
                {userData.about.email}
              </Label>
            </View>
            <View style={styles.rowContent}>
              <LabelBold style={{flex: 1}}>{'Phone Number:'}</LabelBold>
              <Label style={{flex: 1, textAlign: 'right'}}>
                {userData.about.phone}
              </Label>
            </View>
            <View style={styles.rowContent}>
              <LabelBold style={{flex: 1}}>{'Address:'}</LabelBold>
              <Label style={{flex: 1, textAlign: 'right'}}>
                {userData.about.address}
              </Label>
            </View>
            <View style={styles.rowContent}>
              <LabelBold style={{flex: 1}}>{'Country:'}</LabelBold>
              <Label style={{flex: 1, textAlign: 'right'}}>
                {userData.country}
              </Label>
            </View>
          </View>
        );
      case 1:
        return (
          <View style={styles.contentContainer}>
            <Label style={{marginTop: 10, fontSize: 16}}>{'Skills'}</Label>
            {userData.skills.skilllist.map((item, index) => (
              <View style={styles.rowContent}>
                <LabelBold style={{flex: 1}}>{item.skillname}</LabelBold>
                <View style={styles.bar}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: getLevelBarColor(item.level),
                      width: `${item.level}%`,
                      borderRadius: 12,
                    }}
                  />
                </View>
              </View>
            ))}
            <LineSeperator
              style={{width: '85%', alignSelf: 'center', marginTop: 15}}
            />
            <Label style={{marginTop: 10, fontSize: 16}}>{'Language'}</Label>
            {userData.skills.language.map((item, index) => (
              <View style={styles.rowContent}>
                <LabelBold style={{flex: 1}}>{item.lang}</LabelBold>
                <View style={styles.bar}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: getLevelBarColor(item.level),
                      width: `${item.level}%`,
                      borderRadius: 12,
                    }}
                  />
                </View>
              </View>
            ))}
            <LineSeperator
              style={{width: '85%', alignSelf: 'center', marginTop: 15}}
            />
            <Label style={{marginTop: 10, fontSize: 16}}>{'Experience'}</Label>
            {userData.skills.exp.map((item, index) => (
              <View style={styles.rowContent}>
                <LabelBold style={{flex: 1}}>{item.job}</LabelBold>
                <Label style={{flex: 1, textAlign: 'right'}}>
                  {item.numyear + ' Year(s)'}
                </Label>
              </View>
            ))}
          </View>
        );
      case 2:
        return (
          <View style={styles.contentContainer}>
            <LabelBold style={{marginTop: 10}}>{'Social'}</LabelBold>
            {userData.social.map((item, index) => (
              <View
                style={[
                  styles.rowContent,
                  {alignItems: 'center', marginVertical: 5},
                ]}>
                <View style={styles.socialIconContainer}>
                  <Fontisto name={item.name} size={24} />
                </View>
                <Label style={{flex: 1, marginHorizontal: 10}}>
                  {item.data}
                </Label>
              </View>
            ))}
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
              style={{backgroundColor: '#77c'}}
              activeColor="#fff"
              inactiveColor="#fff"
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
    marginTop: 5,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#a7c5eb',
  },
  headerCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 50,
    marginBottom: 30,
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: '#77c',
  },
  headerName: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  },
  tabbarIndicator: {
    backgroundColor: '#fff',
    height: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  bar: {
    backgroundColor: '#eee',
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
  },
  socialIconContainer: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
