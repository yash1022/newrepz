import React, { Component } from 'react';
import Cards from './Cards';
import Button from './Button';
import Spinner from './Spinner';
export default class News extends Component {

   

 

    constructor() {
        super()
        this.state = {
            articles:[
                {
                  "source": {
                    "id": "bbcnews",
                    "name": "BBC News"
                  },
                  "author": "BBC News",
                  "title": "US tourist found dead on Greek island",
                  "description": "A number of foreigners have gone missing as Greece suffers its earliest heatwave on record.",
                  "url": "https://www.bbc.co.uk/news/articles/cl550xgnpl3o",
                  "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5165/live/e5de1c702c9611ef90b1bf36248cf254.jpg",
                  "publishedAt": "20240617T11:07:17.2296443Z",
                  "content": "The body of an American tourist has reportedly been found on the Greek island of Mathraki, adding to the list of foreigners missing or dead during a recordsetting heatwave.\r\nA Dutchman was also foun… [+1686 chars]"
                },
                {
                  "source": {
                    "id": "bbcnews",
                    "name": "BBC News"
                  },
                  "author": "BBC News",
                  "title": "Climate change: The Kenyan influencer promoting denial",
                  "description": "A Kenyan farmer has caught the eye of climate change deniers worldwide. But what is driving him?",
                  "url": "https://www.bbc.co.uk/news/articles/c133r4gyx1no",
                  "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e15f/live/67ea63b027db11ef80aa699d54c46324.png",
                  "publishedAt": "20240617T10:52:16.4826008Z",
                  "content": "This is not religion, this is not just belief. It's about analysing the data and seeing changes in the data.\r\nSaying that climate [change] is a hoax is just really not true, Dr Kimutai added.\r\nMr Mac… [+1129 chars]"
                },
        ],
        page:1,
        loading:true
        
    }

    this.handle_prev = this.handle_prev.bind(this);
    this.handle_next = this.handle_next.bind(this);
    }

    async handle_prev()
    {
         if(this.state.page>1)
            {
        this.setState({page:this.state.page-1})
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=b6aaffa71dca43a39e0ffc7055d798b2&page=${this.state.page}`;
        let data= await fetch(url)
        let parsed_data= await data.json()
        this.setState({articles:parsed_data.articles})
            }
         else
         {
            this.setState({page:this.state.page})
         }

         alert(`${this.state.page}`)
    }

     async handle_next()
     {  this.setState({page:this.state.page+1})
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=b6aaffa71dca43a39e0ffc7055d798b2&page=${this.state.page}`;
        let data= await fetch(url)
       
        let parsed_data= await data.json()
        this.setState({articles:parsed_data.articles})
        alert(`${this.state.page}`)
        
    }

     async componentDidMount()
    {
        
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=b6aaffa71dca43a39e0ffc7055d798b2`
        let data= await fetch(url)
        let parsed_data= await data.json()
        this.setState({articles:parsed_data.articles, loading:false})
        
    }



    render() {
        
        return (

            <div className="container news-container">
            {this.state.loading && <Spinner></Spinner>}    
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <Cards 
                                    title={ element.title?element.title:" "} 
                                    description={ element.description?element.description:" "} 
                                    imageurl={element.urlToImage}
                                    full_url={element.url}
                                />
                                
                            </div>
                        );
                    })}
                </div>

                <Button handle_next={this.handle_next} handle_prev={this.handle_prev}></Button>
            </div>
        );
    }
}
