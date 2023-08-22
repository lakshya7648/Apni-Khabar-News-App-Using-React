import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        const {title, description, imageUrl, newsUrl, author, source, date} = this.props; 
        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0 start-50 z-1 translate-middle badge rounded-pill bg-danger">
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text"><small className="text-body-secondary">{!author?"Unknown":author} on {date}</small></p>
                            <p className="card-text">{description}</p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark w-100">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
