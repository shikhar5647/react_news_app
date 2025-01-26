import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=e3816982035742d6b4beb5a4ab9b89a9';
    this.setState({ loading: true });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          articles: data.articles,
          totalResults: data.totalResults,
          loading: false,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className="container my-3"> 
        <h2>NewsKing - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div> 
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

