/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-10-08 15:22:16
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-10-15 21:42:21
 */
import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    width: 90,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    // borderColor: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    width: 30,
    height: 30,
    marginRight: -1,
    marginTop: -1,
    padding: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

const Well: FC = () => {
  const [latticeList, setLatticelist] = useState([
    {
      id: 1,
      name: '',
    },
    {
      id: 2,
      name: '',
    },
    {
      id: 3,
      name: '',
    },
    {
      id: 4,
      name: '',
    },
    {
      id: 5,
      name: '',
    },
    {
      id: 6,
      name: '',
    },
    {
      id: 7,
      name: '',
    },
    {
      id: 8,
      name: '',
    },
    {
      id: 9,
      name: '',
    },
  ]);
  const [xIsNext, setXIsNext] = useState(true);

  const clickItem = (item: any) => {
    console.log('输出222', item);
    console.log('输出', latticeList);
    let nextSquares = latticeList.slice();
    if (nextSquares[item.id - 1].name) {
      return;
    }
    if (xIsNext) {
      nextSquares[item.id - 1].name = 'X';
    } else {
      nextSquares[item.id - 1].name = 'O';
    }
    console.log('输出target', nextSquares);
    setLatticelist(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <View style={styles.content}>
      {latticeList.map(item => (
        <Text
          style={styles.square}
          key={item.id}
          onPress={() => clickItem(item)}>
          {item.name}
        </Text>
      ))}
    </View>
  );
};
export default Well;
