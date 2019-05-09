import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import { PromiseProvider } from 'mongoose';
import {addComic} from "./Functions";

class Update extends Component{
	render(){
        return(
		    <h1>abc</h1>
        )
	}
}

document.addEventListener('DOMContentLoaded', function() {
	var elem = document.querySelector('.tabs'); 
	var instance = M.Tabs.init(elem, {});
	
      });
export default Update;