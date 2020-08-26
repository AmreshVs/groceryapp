import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Checkbox from 'components/checkbox';

export default function App() {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Checkbox label="Passport" checked={checked} handleChecked={() => setChecked(!checked)} />
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