import * as React from 'react';
import { Text, View, Button } from 'react-native';
import store from '../stores/stores';
import { Observer } from 'mobx-react';
import style from '../style/style';

function StateScreen() {
  return (
    <View style={ style.container }>
      <Observer>{() => <Text style={{fontSize: 35}}>{store.counter.count}</Text>}</Observer>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'}}>
        <View style={ style.buttonContainer }><Button title='Add' color={'#AC58AD'} onPress={() => store.counter.add()}/></View>
        <View style={ style.buttonContainer }><Button title='Subtract' color={'#AC58AD'} onPress={() => store.counter.sub()}/></View>
      </View>
    </View>
  );
}

export default StateScreen;
