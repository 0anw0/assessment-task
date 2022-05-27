import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';

function NewFilmsBadges() {
  return (
    <View style={styles.newFilmsBadge}>
      <Text style={styles.newFilmBadgeTitle}> NEW FILMS </Text>
    </View>
  );
}

export default NewFilmsBadges;
