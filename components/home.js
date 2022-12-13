import * as React from 'react';
import { Text, View } from 'react-native';
import store from '../stores/stores';
import { Observer } from 'mobx-react';
import style from '../style/style';

function HomeScreen() {
  return (
    <View style={ style.container }>
      <Text style={{fontSize: 35, margin: 15}}>Welcome!</Text>
      <Text style={{fontSize: 20}}>This is the counter from state</Text>
      <Observer>{() => <Text style={{fontSize: 20}}>{store.counter.count}</Text>}</Observer>
    </View>
  );
}

export default HomeScreen;
