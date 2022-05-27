import React, {Component} from 'react';
import {View, FlatList, Dimensions} from 'react-native';

import {API} from '../api/api';
import {Card, NewFilmsBadges, Loading} from '../components/index';
import styles from '../styles/styles';

const {height} = Dimensions.get('window');

class Mainscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      page: 1,
      loadNewFilms: true,
      showBadge: false,
    };
  }

  componentDidMount() {
    this.getDataPage(1);
  }

  getDataPage = page => {

    let selectedFilmsAttributes = [];
    this.setState({loadNewFilms: true});
    let uri = API + page;

    fetch(uri, 'GET')
      .then(response => response.json())
      .then(response => {

        response.results.forEach(element => {
          selectedFilmsAttributes.push({
            title: element.title,
            overview: element.overview,
            vote_average: element.vote_average,
            release_date: element.release_date,
            poster_path: element.poster_path,
            id: element.id,
          });
        });

        this.setState(prevState => ({
          films: [...prevState.films, ...selectedFilmsAttributes],
          loadNewFilms: false,
          page: page,
          showBadge: true,
        }))
        this.newFilmsNotify()

      })
      .catch(e => console.log('Error fetching data ===>', e));
  };

  newFilmsNotify = () => {
    setTimeout(() => {
      this.setState({showBadge: false});
    }, 2000);
  };

  setLoading = load => {
    this.setState({loading: load});
  };

  renderItem = (item, index) => (
    <Card item={item} setLoading={this.setLoading} key={item.id} />
  );

  ExtractKey = item => item.id;

  getItemLayout = (data, index) => ({
    length: height,
    offset: height * index,
    index,
  });

  render() {
    const {films, page, loadNewFilms, showBadge} = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={films}
          renderItem={this.renderItem}
          onEndReached={() => this.getDataPage(page + 1)}
          keyExtractor={this.ExtractKey}
          getItemLayout={this.getItemLayout}
          initialNumToRender={2}
          maxToRenderPerBatch={3}
          removeClippedSubviews={true}
          windowSize={5}
          showsVerticalScrollIndicator={false}
        />
        {loadNewFilms && <Loading />}
        {showBadge && <NewFilmsBadges />}
      </View>
    );
  }
}

export default Mainscreen;
