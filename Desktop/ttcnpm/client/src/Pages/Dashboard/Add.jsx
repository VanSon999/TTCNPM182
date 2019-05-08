import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { PromiseProvider } from 'mongoose';
import {addComic} from "./Functions";

class Add extends Component{
	constructor(){
		super();
		this.state = {
			comicName : " ",
			author : " "
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e){
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	onSubmit(e){	
		e.preventDefault()
		const newComic = {
			comicName : this.state.comicName,
			author : this.state.author
		}
		addComic(newComic).then(res=>{
			console.log("Add thành công!!!");
		})
	}
	render(){
		return(
			<form action="/action_page.php" onSubmit={this.onSubmit}>
			<div class="form-group">
				<label for="email">Tên truyện:</label>
				<input type="text" class="form-control" id="email" name="comicName" onChange={this.onChange}/>
			</div>
			<div class="form-group">
				<label for="email">Tác giả:</label>
				<input type="text" class="form-control" id="email" name="author" onChange={this.onChange}/>
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
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		)
	}
}

// const Add = (props) =>
// {
// 	return(
// 		<form action="/action_page.php">
// 		<div class="form-group">
// 			<label for="email">Tên truyện:</label>
// 			<input type="email" class="form-control" id="email" name="comicName"/>
// 		</div>
// 		<div class="form-group">
// 			<label for="email">Tác giả:</label>
// 			<input type="email" class="form-control" id="email" name="author"/>
// 		</div>
// 		<div class="col-md-12">
// 		<select class="mdb-select colorful-select dropdown-primary md-form" multiple searchable="Search here..">
// 			<option value="" disabled selected>Thể loại </option>
// 			<option value="1">Action</option>
// 			<option value="2">Comedy</option>
// 			<option value="3">Tragedy</option>
// 			<option value="4">Adventure</option>
// 			<option value="5">Horror</option>
// 		</select>
// 		</div>
// 		<button type="submit" class="btn btn-primary">Submit</button>
// 		</form>
// 	);
// }

document.addEventListener('DOMContentLoaded', function() {
	var elem = document.querySelector('.tabs'); 
	var instance = M.Tabs.init(elem, {});
	
      });
export default Add;