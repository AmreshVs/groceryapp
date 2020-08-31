import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';

export default function Column({ children, ...otherStyles }) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          display: 'flex',
          flexDirection: 'column',
          ...otherStyles,
        },
      }),
    [otherStyles]
  );

  return <View style={styles.container}>{children}</View>;
}
