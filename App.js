import React from 'react';
import { View, StyleSheet } from 'react-native';

import Coupon from 'components/coupon';

export default function App() {

  return (
    <View style={styles.container}>
      <Coupon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 20
  },
});