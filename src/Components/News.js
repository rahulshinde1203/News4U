import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=498d7388bd584155a93b716b646f926d";
        let data =await fetch(url);
        let parsedData = await data.json()
        this.setState({articles:parsedData.articles})

    } 

    handlePreviousClick =async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=498d7388bd584155a93b716b646f926d ${this.state.page-1}`;
        console.log('pc')    
        let data =await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles
        })
    }

    handleNextClick =async()=>{
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=498d7388bd584155a93b716b646f926d ${this.state.page + 1}`;
        let data =await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles
            })
    }
    
  
  render() {
    return (
      <div className="container my-3">
        <h2>News4u - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
            <NewsItem 
              title={element.title?element.title.slice(0,45):""}
              description={element.description?element.description.slice(0,60):""}
              imgUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>
          })}
          
        </div>
        <div className="container d-flex justify-content-between">
            <button type="button" className="btn  btn-dark"onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button type="button" className="btn  btn-dark"onClick={this.handleNextClick} >Next &rarr;</button>
            </div>
      </div>
    );
  }
}

export default News;

// onClick={this.handlePreviousClick}
// onClick={this.handleNextClick}