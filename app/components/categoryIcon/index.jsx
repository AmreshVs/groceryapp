import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import colors from 'constants/colors';

export default function CategoryIcon({ icon = 'check', selected }) {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    iconContainer: {
      width: 60,
      height: 60,
      backgroundColor: selected ? colors.primary : colors.primary_lite,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.black,
      paddingVertical: 5,
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={icon} color={selected ? colors.white : colors.primary} size={30} />
      </View>
      <Text style={styles.text}>Fruits</Text>
    </View>
  );
}
