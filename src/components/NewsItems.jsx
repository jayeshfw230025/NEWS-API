import React from "react"

const NewsItems = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-3 px-3" style={{width:"345px"}}>
  <img src={src} className="card-img-top" alt="news" style={{height:"200px", width:"300px"}}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
};

export default NewsItems
