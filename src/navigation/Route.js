import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import * as ROUTE from './routeName';
import LoginScreen from '@screens/auth/Login';
import HomeScreen from '@screens/homeFeed/Home';
import FeedDetailScreen from '@screens/homeFeed/FeedDetail';
import MapScreen from '@screens/homeFeed/Map';
import PostScreen from '@screens/Post';
import UserProfileScreen from '@screens/profile/UserProfile';
import ConCallScreen from '@screens/conCall/ConCall';

const Routes = ({isLogin, ...props}) => {
  const LoginStack = createStackNavigator();

  const Login = () => (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name={ROUTE.LOGIN} component={LoginScreen} />
    </LoginStack.Navigator>
  );

  const MainStack = createStackNavigator();

  const Main = () => (
    <MainStack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#77c'},
      }}>
      <MainStack.Screen name={ROUTE.HOME} component={HomeScreen} />
      <MainStack.Screen name="Post" component={PostScreen} />
      <MainStack.Screen name={ROUTE.FEED_DETAIL} component={FeedDetailScreen} />
      <MainStack.Screen name={ROUTE.FEED_MAP} component={MapScreen} />
      <MainStack.Screen
        name={ROUTE.USER_PROFILE}
        component={UserProfileScreen}
      />
      <MainStack.Screen name={ROUTE.CONCALL} component={ConCallScreen} />
    </MainStack.Navigator>
  );

  return (
    <NavigationContainer>{isLogin ? <Main /> : <Login />}</NavigationContainer>
  );
};
const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps)(Routes);
