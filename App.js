import React from 'react';
import { View, StyleSheet } from 'react-native';

import Chip from 'components/chip';
import Column from 'components/column';

export default function App() {

  return (
    <View style={styles.container}>
      <Column backgroundColor="red" width="100%">
        <Chip title="In Progress" color="tomato" />
        <Chip title="In Progress" color="tomato" />
        <Chip title="In Progress" color="tomato" />
      </Column>
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