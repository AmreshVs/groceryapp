import React from 'react';
import { View, StyleSheet } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Product from 'components/product';
import colors from 'constants/colors';


export default function App() {

  return (
    <View style={styles.container}>
      <Product />
    </View>
  );
}

library.add(fas);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 20,
    backgroundColor: colors.gray
  },
});