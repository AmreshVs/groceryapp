import React, { useState } from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';

import colors from 'constants/colors';

export default function Textbox({ style, outlined, placeholder, text, ...args }) {
  const [focus, setFocus] = useState(false);

  let textboxStyle = outlined ? styles.outlined : focus ? styles.textboxFocus : styles.textbox;

  return (
    <>
      {text ? <Text style={styles.text}>{text}</Text> : null}
      <TextInput
        style={[textboxStyle, style]}
        placeholder={placeholder || ''}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...args}
      />
    </>
  );
}

const textboxStyle = {
  height: 40,
  width: '100%',
  borderRadius: 50,
  borderWidth: 1,
  borderColor: '#DDD',
  paddingHorizontal: 20,
};

const styles = StyleSheet.create({
  textbox: {
    ...textboxStyle,
    backgroundColor: '#f5f5f5',
  },
  textboxFocus: {
    ...textboxStyle,
    backgroundColor: '#f9f9f9',
  },
  outlined: {
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    // backgroundColor: '#f9f9f9',
    borderColor: colors.primary,
  },
  text: {
    width: '100%',
    fontSize: 19,
    fontWeight: '600',
    marginBottom: 10,
  },
});
