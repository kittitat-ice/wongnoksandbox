import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import Route from './src/navigation/Route';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Route />
    </Provider>
  );
};

export default App;
