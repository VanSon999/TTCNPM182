import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import Add from './Add';
import Update from './Update';

const add_update = () => {
	return (
		<div className="row">
    		<div className="col s12 m8 l9">
      			<ul className="tabs">
        			<li className="tab col s4" >
          				<a href="#Add" className="black-text" >Add Comics</a>
        			</li>
        			{/* <li className="tab col s4">
        				<a href="#Update" className="black-text" >Update Comics</a>
        			</li> */}
      			</ul>
      			<div id="Add" className = "row">
        			<Add/>
				</div>
    			<div id="Update">
    				<Update/>
    			</div>
    		</div>
        </div>
        
        // <div class="row">
        //     <div class="col s12">
        //         <ul class="tabs">
        //             <li class="tab col s3"><a href="#test1">Test 1</a></li>
        //             <li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>
        //             <li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
        //             <li class="tab col s3"><a href="#test4">Test 4</a></li>
        //         </ul>
        //     </div>
            
        //     <div id="test1" class="col s12">Test 1</div>
        //     <div id="test2" class="col s12">Test 2</div>
        //     <div id="test3" class="col s12">Test 3</div>
        //     <div id="test4" class="col s12">Test 4</div>
        // </div>
    );
	}
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.tabs'); 
    var instance = M.Tabs.init(elem, {});
    
  });

export default add_update;