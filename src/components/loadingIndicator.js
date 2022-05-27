import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from '../styles/styles';

function Loading() {
  return (
    <View style={{position: 'absolute'}}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  );
}

export default Loading;
