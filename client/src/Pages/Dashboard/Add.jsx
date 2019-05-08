import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import MaterialIcon, {colorPalette} from 'material-icons-react';


const Add = (props) =>
{
	return(
		<form action="/action_page.php">
		<div class="form-group">
			<label for="email">Tên truyện:</label>
			<input type="email" class="form-control" id="email"/>
		</div>
		<div class="form-group">
			<label for="email">Tác giả:</label>
			<input type="email" class="form-control" id="email"/>
		</div>
		<div class="col-md-12">
		<select class="mdb-select colorful-select dropdown-primary md-form" multiple searchable="Search here..">
			<option value="" disabled selected>Thể loại </option>
			<option value="1">Action</option>
			<option value="2">Comedy</option>
			<option value="3">Tragedy</option>
			<option value="4">Adventure</option>
			<option value="5">Horror</option>
		</select>
		{/* <label class="mdb-main-label">Label example</label>
		<button class="btn-save btn btn-primary btn-sm">Save</button> */}
		</div>
		{/* <div class="form-group">
			<label for="pwd">Password:</label>
			<input type="password" class="form-control" id="pwd"/>
		</div> */}
		{/* <div class="form-group form-check">
			<label class="form-check-label">
			<input class="form-check-input" type="checkbox"/> Remember me
			</label>
		</div> */}
		<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	);
}

document.addEventListener('DOMContentLoaded', function() {
	var elem = document.querySelector('.tabs'); 
	var instance = M.Tabs.init(elem, {});
	
      });
export default Add;