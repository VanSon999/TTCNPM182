import React from 'react';

const HistoryNotice = (props) =>
{
	return (
		<li className="collection-item avatar">
      		<img src={props.comicPic} alt="" className="circle img-responsive"/>
      		<p>{props.comicTypeorTime}</p>
      		<span className="title ">{props.comicName}</span>
      		<p>{props.comicChap}</p>
      		<a href="#!" className="secondary-content"><i className="material-icons">close</i></a>
    	</li>
	);
}


export default HistoryNotice;