import React from 'react';


const FavouriteList = (props) => {

	return (
		<div >
    <div className="col m3 s12">
      <div className="card hoverable">
        <div className="card-image">
          <img src={props.comicPic}/>
          <a className="btn-floating halfway-fab waves-effect waves-light red" href="#">
            <i className="material-icons ">close</i>
          </a>
        </div>
        <div className="card-content">
          <span className="card-title black-text text-darken-2 b">{props.comicName}</span>
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  </div>
	)
}


export default FavouriteList;