import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from 'constants/colors';

export default function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: colors.lite_gray,
    backgroundColor: colors.white,
  },
});
