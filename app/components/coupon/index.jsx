import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Coupon() {
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.dashed}></View>
      <View style={styles.bottom}></View>
      <View style={styles.circleContainer}>
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: '100%',
    backgroundColor: '#5356a5',
    borderRadius: 10,
  },
  top: {
    height: '49.5%',
    width: '100%',
  },
  bottom: {
    height: '49.5%',
    width: '100%',
  },
  dashed: {
    borderWidth: 1,
    borderRadius: 1,
    borderStyle: 'dashed',
    borderColor: '#FFF',
    height: '1%',
  },
  circle: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    position: 'absolute',
    borderRadius: 15,
  },
  circleContainer: {
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
