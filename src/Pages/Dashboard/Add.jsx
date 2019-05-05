import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'


const Add = (props) =>
{
	return (
        <h1>add</h1>
		
	);
}

document.addEventListener('DOMContentLoaded', function() {
	var elem = document.querySelector('.tabs'); 
	var instance = M.Tabs.init(elem, {});
	
      });
export default Add;