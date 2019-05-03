import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import FavouriteList from './FavouriteList/FavouriteList.js';
import HistoryNotice from './HistoryNotice/HistoryNotice.js';

const storyboard = () => {
		return (
		<div>
			<h2>Storybroad</h2>
			<div className="row">
    			<div className="col s12 16 offset-12">
      				<ul className="tabs">
        				<li className="tab col s4" >
        	  				<a href="#Favourite" className="black-text" >Favourite List</a>
        				</li>
        				<li className="tab col s4">
        					<a href="#History" className="black-text" >History</a>
        				</li>
        				<li className="tab col s4">
        					<a href="#Notice" className="black-text" >Notice</a>
        				</li>
      				</ul>
      				<div id="Favourite" className = "row">
        				<FavouriteList comicPic="logo.png" comicName="Name 1"/>
        				<FavouriteList comicPic="logo.png" comicName="Name 2"/>
        				<FavouriteList comicPic="logo.png" comicName="Name 3"/>
        				<FavouriteList comicPic="logo.png" comicName="Name 4"/>
        				<FavouriteList comicPic="logo.png" comicName="Name 5"/>
					</div>
    				<div id="History">
    					<ul className="collection">
    						<HistoryNotice comicPic="logo.png" comicName = "Name 1" comicChap="Chap 1 : Name chap" comicTypeorTime="Read 1/1/2019"/>
    						<HistoryNotice comicPic="logo.png" comicName = "Name 2" comicChap="Chap 1 : Name chap" comicTypeorTime="Read 1/1/2019"/>
    						<HistoryNotice comicPic="logo.png" comicName = "Name 3" comicChap="Chap 1 : Name chap" comicTypeorTime="Read 1/1/2019"/>
    					</ul>
    				</div>
    				<div id="Notice">
    					<ul className="collection">
    						<HistoryNotice comicPic="logo.png" comicName = "Name 1" comicChap="Chap 1 : Name chap" comicTypeorTime="Updated"/>
    						<HistoryNotice comicPic="logo.png" comicName = "Name 2" comicChap="Chap 1 : Name chap" comicTypeorTime="Updated"/>
    						<HistoryNotice comicPic="logo.png" comicName = "Name 3" comicChap="Chap 1 : Name chap" comicTypeorTime="Updated"/>
    					</ul>
    				</div>
    			</div>
    
  			</div>
  		</div>
		);
	}
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.tabs'); 
    var instance = M.Tabs.init(elem, {});
    
  });

export default storyboard;