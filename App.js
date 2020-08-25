import React from 'react';
import { View, StyleSheet } from 'react-native';
import Dropdown from 'components/dropdown';

const data = [
  {
    name: 'First Item',
  },
  {
    name: 'Second Item',
  },
  {
    name: 'Third Item',
  },
  {
    name: 'Third Item2',
  },
  {
    name: 'Third Item3',
  },
  {
    name: 'Third Item4',
  },
  {
    name: 'Third Item5',
  },
  {
    name: 'Third Item6',
  },
  {
    name: 'Third Item7',
  },
  {
    name: 'Third Item8',
  },
  {
    name: 'Third Item9',
  },
  {
    name: 'Third Item23',
  },
  {
    name: 'Third Item43',
  },
  {
    name: 'Third Item23d',
  },
  {
    name: 'Third Item43g',
  },
  {
    name: 'Third Item234',
  },
];


export default function App() {
  const [selected, setSelected] = React.useState('');
  const onSelect = (item) => {
    setSelected(item.name);
  }
  return (
    <View style={styles.container}>
      <Dropdown data={data} selected={selected} onSelect={onSelect} />
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