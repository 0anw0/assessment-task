import React, {useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Image_DB} from '../api/api';
import styles from '../styles/styles';

function Rating({vote}) {
  return (
    <View style={styles.votingContainer}>
      <Text style={styles.voteText}>{vote}</Text>
      <Image style={styles.star} source={require('../../assets/star.png')} />
    </View>
  );
}

function Cover({uri}) {
  const [loadImage, setLoadImage] = useState(true);
  return (
    <View style={styles.coverContainer}>
      {loadImage && (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      )}
      <FastImage
        style={styles.stretch}
        source={{
          uri: uri,
          priority: FastImage.priority.normal,
        }}
        onLoadStart={() => setLoadImage(true)}
        onLoadEnd={() => setLoadImage(false)}
      />
    </View>
  );
}

function FilmDiv({title, overview, release_date}) {
  return (
    <View style={styles.filmInfoContainer}>
      <Text style={styles.filmTitle}>{title}</Text>
      <Text style={styles.filmDescription}>{overview}</Text>
      <Text style={styles.filmReleaseDate}>{release_date}</Text>
    </View>
  );
}

function Card({item}) {
  item = item.item;
  let image_uri = Image_DB + item.poster_path;
  return (
    <View style={styles.cardContainer}>
      <Cover uri={image_uri} />
      <Rating vote={item.vote_average} />
      <FilmDiv
        overview={item.overview}
        title={item.title}
        release_date={item.release_date}
      />
    </View>
  );
}

export default Card;
