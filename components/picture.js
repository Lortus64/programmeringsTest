import * as React from 'react';
import { Text, View, Image } from 'react-native';
import style from '../style/style';

function PictureScreen() {
  return (
    <View style={ style.container }>
      <Image style={{resizeMode: 'cover', height: 250, width: 250}} source={require('./img/me.jpg')}/>
      <Text style={{margin: 10, fontSize: 20}} >Hello this is me!</Text>
    </View>
  );
}

export default PictureScreen;
