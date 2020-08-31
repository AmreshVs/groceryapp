import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from 'constants/colors';

export default function Chip({ title, color, style = {} }) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: color,
          borderRadius: 5,
        },
        text: {
          color: colors.white,
          paddingHorizontal: 10,
          paddingVertical: 2,
        },
      }),
    [color]
  );

  return (
    <View style={[style, styles.container]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
