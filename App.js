import React from 'react';
import { View, StyleSheet } from 'react-native';

import OrderProgress from 'components/orderProgress';
import ProgressItem from 'components/orderProgress/progressItem';

export default function App() {

  return (
    <View style={styles.container}>
      <OrderProgress>
        <ProgressItem width='15%' label="Placed" />
        <ProgressItem width='25%' label="Packed" path />
        <ProgressItem label="on the way" fill={false} path />
        <ProgressItem label="on the way" fill={false} path />
      </OrderProgress>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 20,
  },
});