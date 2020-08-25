import React from 'react';
import { View, StatusBar as Status, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SafeView({ style, children }) {
  return (
    <View style={[style, styles.container]}>
      <StatusBar style="dark" />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Status.currentHeight
  }
});