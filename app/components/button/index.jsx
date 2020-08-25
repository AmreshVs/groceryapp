import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

import colors from 'constants/colors';

export default function Button({ children, outline, status, onPress }) {
  const styles = getStyles(colors, status);
  let underlayColor = outline ? colors.gray : '#000';
  let buttonStyle = outline ? styles.outlineButton : styles.button;
  let textStyle = outline ? styles.outlineText : styles.text;

  return (
    <TouchableHighlight
      style={styles.btnContainer}
      activeOpacity={0.9}
      underlayColor={underlayColor}
      onPress={onPress || null}
    >
      <View style={buttonStyle}>
        <Text style={textStyle}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
}

const getStyles = (colors, status) => {
  let btnColor = colors[status] || colors.primary;
  return StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    btnContainer: {
      borderRadius: 20,
      width: '100%',
    },
    button: {
      backgroundColor: btnColor,
      padding: 10,
      borderRadius: 20,
      alignItems: 'center',
    },
    outlineButton: {
      borderColor: btnColor,
      borderWidth: 2,
      padding: 10,
      borderRadius: 20,
      alignItems: 'center',
    },
    text: {
      color: colors.white,
      fontSize: 16,
      fontWeight: '700',
    },
    outlineText: {
      color: btnColor,
      fontSize: 16,
      fontWeight: '700',
    },
  });
};
