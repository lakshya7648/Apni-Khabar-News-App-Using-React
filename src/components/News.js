import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    idCount = 0;
    constructor(props) { // props in as a parameter must be received to access props inside constructor()
        super(props); // and the same should be passed to the super() function.
        this.state={
            "articles":[],
            "loading":true,
            page:1,
            "pageSize":20,
            "totalResults":0,
        }
        document.title  = props.category.charAt(0).toUpperCase() + props.category.slice(1)+" - News";
    }
    updateNews = async () => {
        const {category} = this.props;
        this.props.setProgress(10);
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=6f42f844669f451ab4c73e3744a227c2&page=${this.state.page}`);
        this.props.setProgress(50);
        const parsedData = await data.json();
        this.props.setProgress(80);
        console.log(parsedData);
        this.setState({
            "articles":parsedData.articles,
            "loading":false,
            "totalResults":parsedData.totalResults,
            page:this.state.page,
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updateNews();   
    }
    fetchData = async () =>{
        const {category} = this.props;
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=6f42f844669f451ab4c73e3744a227c2&page=${this.state.page + 1}`);
        const parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            "articles":this.state.articles.concat(parsedData.articles),
            "loading":false,
            "totalResults":parsedData.totalResults,
            page:this.state.page + 1,
        })
    }
    render() {
        
        return (
            <div>
                <div className="container my-3">
                    <h1 className="text-center news_heading fs-1" style={{marginTop:'90px', marginBottom:'30px'}}>Top Headlines - {this.props.category === "general"?"Home":this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}</h1>
                    {this.state.loading && <Spinner/>}
                    <InfiniteScroll
                        dataLength={this.state.articles.length} //This is important field to render the next data
                        next={this.fetchData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner/>} 
                        >
                    <div className="container">
                    <div className="row p-2 my-2">
                        {this.state.articles.map((element)=>{
                            return <div className="col-md-4 my-2" key={this.props.category+(this.idCount++)}>
                                <NewsItem title={element.title?element.title.slice(0, 100)+"....":"....."} description = {element.description?element.description.slice(0, 120)+"...":"....."} imageUrl = {element.urlToImage?element.urlToImage:"https://media.istockphoto.com/id/1440979913/photo/view-of-stacked-newspapers-on-blurred-background.jpg?s=1024x1024&w=is&k=20&c=Xh8KGeFsyeGPr01_0rFUWzglvf0OBeaF9R0RkbwVuPM="} newsUrl={element.url} author={element.author} source={element.source.name} date={new Date(element.publishedAt).toGMTString()} />
                            </div>
                        })}
                    </div>
                    </div>
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

export default News
