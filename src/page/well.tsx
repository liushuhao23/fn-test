/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-10-08 15:22:16
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-10-08 18:30:42
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
    borderColor: '#fff',
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

const clickItem = () => {
  console.log('输出222');
};

const Well: FC = () => {
  //  const [isWin, setWin] = useState('');
  //   const [currentPeo, setCurrentPeo] = useState('');
  const [latticeList, setLatticelist] = useState([]);
  return (
    <View style={styles.content}>
      <Text style={styles.square} onPress={clickItem}>
        1
      </Text>
      <Text style={styles.square} onPress={clickItem}>
        2
      </Text>
      <Text style={styles.square} onPress={clickItem}>
        3
      </Text>
      <Text style={styles.square} onPress={clickItem}>
        4
      </Text>
      <Text style={styles.square} onPress={clickItem}>
        5
      </Text>
      <Text style={styles.square} onPress={clickItem}>
        6
      </Text>
      <Text style={styles.square} onPress={clickItem}>
        7
      </Text>
      <Text style={styles.square} onPress={clickItem}>
        8
      </Text>
      <Text style={styles.square} onPress={clickItem}>
        9
      </Text>
    </View>
  );
};
export default Well;
