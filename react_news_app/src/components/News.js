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

  render() {
    return (
      <div className="container my-3"> 
        <h2>NewsKing - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
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

