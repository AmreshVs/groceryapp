import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';

export default function Row({ children, vcenter, hcenter, ...otherStyles }) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: vcenter ? 'center' : 'flex-start',
          justifyContent: hcenter ? 'center' : 'flex-start',
          ...otherStyles,
        },
      }),
    [otherStyles]
  );

  return <View style={styles.container}>{children}</View>;
}
