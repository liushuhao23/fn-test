/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  // StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Well from './src/page/well';

const getWh = (): any => {
  const min = 30;
  const max = 100;
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
};
function List(): JSX.Element {
  const [leftList, setLeftList] = useState<any>([]);
  const [rightList, setRightList] = useState<any>([]);
  const dealList = useCallback(() => {
    console.log('输22222出');
    const list = [
      {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        index: 1,
      },
      {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        index: 2,
      },
      {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        index: 3,
      },
      {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        index: 4,
      },
      {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        index: 5,
      },
      {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        index: 6,
      },
      {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        index: 7,
      },
      {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        index: 8,
      },
    ];
    const left: any = [];
    const right: any = [];
    list.forEach((item: any, index: number) => {
      item.height = getWh();
      if (index % 2 === 0) {
        left.push(item);
      } else {
        right.push(item);
      }
    });
    return {left, right};
  }, []);
  useEffect(() => {
    const {left, right} = dealList();
    setLeftList(left);
    setRightList(right);
  }, []);
  return (
    <>
      <View style={{width: '50%', height: '100%'}}>
        {leftList.map((item: any) => (
          <Image
            key={item.index}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 180,
              height: item.height,
              marginBottom: 10,
              marginRight: 10,
            }}
            source={{uri: item.uri}}
          />
        ))}
      </View>
      <View style={{width: '50%', height: '100%'}}>
        {rightList.map((item: any) => (
          <Image
            key={item.index}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 180,
              height: item.height,
              marginBottom: 10,
              marginRight: 10,
            }}
            source={{uri: item.uri}}
          />
        ))}
      </View>
    </>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Well />
      </View>
    </SafeAreaView>
  );
}

export default App;
