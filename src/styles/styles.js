import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  stretch: {width: width, height: height},
  filmTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },
  filmDescription: {
    textAlign: 'justify',
    color: '#dedede',
  },
  filmReleaseDate: {
    color: '#a1a1a1',
    textAlign: 'center',
  },
  filmInfoContainer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: height * 0.25,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  votingContainer: {
    position: 'absolute',
    top: height * 0.05,
    right: width * 0.05,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    padding: 5,
    borderRadius: 10,
    width: width * 0.2,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardContainer: {width: width, height: height},
  voteText: {fontWeight: 'bold', fontSize: 18, color: 'black'},
  star: {
    width: 20,
    height: 20,
  },
  loadingIndicator: {position: 'absolute', top: height * 0.5},
  coverContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  newFilmsBadge: {
    backgroundColor: 'red',
    position: 'absolute',
    top: height * 0.05,
    margin: 20,
    width: 100,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newFilmBadgeTitle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
