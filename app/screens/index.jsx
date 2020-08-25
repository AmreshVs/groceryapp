import React from 'react';
import { StyleSheet, Text } from 'react-native';

import SafeView from 'components/safeView';

export default function Login() {
  return (
    <SafeView style={styles.container}>
      <Text>Welcome to react native</Text>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
