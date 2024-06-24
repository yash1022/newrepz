import React, { Component } from 'react';

export default class Cards extends Component {
  render() {
    let { title, description, imageurl, full_url } = this.props;
   
    return (
      <div>
        <div className="card my-4" style={{ width: "22rem"}}>
           <img src={imageurl} className="card-img-top" alt=' '/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={full_url} className="btn btn-sm btn-primary">Read Full</a>
          </div>
        </div>
      </div>
    );
  }
}
