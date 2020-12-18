import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import {loginUser} from '@redux/actions';
import {connect} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Login = ({isLogin, navigation, ...props}) => {
  const [username, setUsername] = useState('incloud');
  const [password, setPassword] = useState('incloud');

  useEffect(() => {
    if (isLogin) {
      navigation.navigate('Home');
    }
  }, [isLogin]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo} />
      <View style={styles.loginPanel}>
        <View style={styles.rowContainer}>
          <View style={styles.IMGPH}>
            <FontAwesome name="user" size={35} />
          </View>
          <TextInput
            autoCapitalize={'none'}
            onChangeText={(string) => setUsername(string)}
            value={username}
            style={styles.textInput}
          />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.IMGPH}>
            <FontAwesome name="lock" size={35} />
          </View>
          <TextInput
            secureTextEntry
            value={password}
            onChangeText={(string) => setPassword(string)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() =>
              props.loginUser({username: username, password: password})
            }>
            <Text style={styles.loginButtonLabel}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#77c',
  },
  row: {
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginVertical: 50,
    backgroundColor: 'tomato',
  },
  loginPanel: {
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  IMGPH: {
    width: 40,
    height: 40,
    //borderRadius: 50,
    //backgroundColor: 'gray',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 18,
  },
  loginButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#37f',
    paddingVertical: 6,
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
