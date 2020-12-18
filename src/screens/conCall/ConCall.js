import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';

const ConCall = ({navigation, ...props}) => {
  useEffect(() => {
    setTimeout(() => {
      const url = 'https://meet.jit.si/wongnoktestcon';
      const userInfo = {
        displayName: 'APP_TEST',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      JitsiMeet.call(url, userInfo);
    }, 1000);
    return () => {
      JitsiMeet.endCall();
    };
  }, []);

  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    navigation.goBack();
    console.log(nativeEvent);
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log(nativeEvent);
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log(nativeEvent);
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-130}
      behavior="padding"
      style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <JitsiMeetView
          onConferenceTerminated={(e) => onConferenceTerminated(e)}
          onConferenceJoined={(e) => onConferenceJoined(e)}
          onConferenceWillJoin={(e) => onConferenceWillJoin(e)}
          style={{flex: 1}}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ConCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
