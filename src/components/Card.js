import React from "react";

const Card=(props)=>{

    return(

    <React.Fragment>
    {props.post.map((posts) => (
          <React.Fragment>
        <div className="card" style={{width: '20rem'}}>
          <div className="card-body">
          <a className="btn btn-primary">{posts.id}</a>
            <h5 className="card-title" style={{color:'red'}}>{posts.title}</h5>
            <p className="card-text">{posts.body}</p>
          
          </div>
        </div>
        <hr/>
        </React.Fragment>
    
                   
              ))}
                </React.Fragment>
    )
}

export default Card;