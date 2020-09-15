import React from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import colors from 'constants/colors';
import { RUPEE_SYMBOL } from 'constants/common';
import Row from 'components/row';

export default function Product() {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.iconContainer}
        underlayColor="#f5f5f5"
        activeOpacity={0.95}
        onPress={() => console.log('Presssed')}
      >
        <FontAwesomeIcon icon="heart" color="red" size={18} />
      </TouchableHighlight>
      <Image style={styles.image} source={require('../../../assets/fruit.png')} />
      <Row vcenter>
        <Text style={styles.price}>{RUPEE_SYMBOL} 120/Kg</Text>
        <Text style={styles.oldPrice}>{RUPEE_SYMBOL} 120/Kg</Text>
      </Row>
      <Text style={styles.desc}>Avacado - Small</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 210,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 105,
    marginVertical: 5,
  },
  price: {
    fontSize: 17,
    color: colors.black,
    marginRight: 5,
    marginBottom: 3,
    fontWeight: '700',
  },
  oldPrice: {
    fontSize: 12,
    color: colors.text_lite,
    textDecorationLine: 'line-through',
  },
  desc: {
    color: colors.text_lite,
  },
  iconContainer: {
    position: 'absolute',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    zIndex: 1,
    right: 3,
    top: 3,
    borderRadius: 20,
  },
});
