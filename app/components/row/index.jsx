import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';

export default function Row({ children, ...otherStyles }) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          display: 'flex',
          flexDirection: 'row',
          ...otherStyles,
        },
      }),
    [otherStyles]
  );

  return <View style={styles.container}>{children}</View>;
}
