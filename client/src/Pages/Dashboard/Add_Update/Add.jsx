import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import { PromiseProvider } from 'mongoose';
import {addComic} from "./Functions";
import "./style.css"

class Add extends Component{
	constructor(){
		super();
		this.state = {
			comicName : " ",
			author : " ",
			artist: " ",
			company: " ",
			status: " ",
			description: " ",
			avatar: " ",
			view: " ",
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
			author : this.state.author,
			artist: this.state.artist,
			company: this.state.company,
			status: this.state.status
		}
		addComic(newComic).then(res=>{
			console.log("Add thành công!!!");
		})
	}
	render(){
		return(
			<form action="/action_page.php" onSubmit={this.onSubmit} class="center">
			<div class="form-group">
				<label for="email">Tên truyện:</label>
				<input type="text" class="form-control" name="comicName" onChange={this.onChange}/>
			</div>
			<div class="form-group">
				<label >Tác giả:</label>
				<input type="text" class="form-control" name="author" onChange={this.onChange}/>
			</div>
			<div class="form-group">
				<label >Họa sĩ:</label>
				<input type="text" class="form-control" name="artist" onChange={this.onChange}/>
			</div>
			<div class="form-group">
				<label >Nhà xuất bản:</label>
				<input type="text" class="form-control" name="company" onChange={this.onChange}/>
			</div>
			<div class="form-group" >
				<label >Mô tả:</label>
				<textarea class="form-control" rows="50" onChange={this.onChange}></textarea>
			</div>

			{/* <div class="col-md-12"> */}
			<select class="mdb-select colorful-select dropdown-primary md-form" multiple searchable="Search here..">
				<option value="" disabled selected>Thể loại </option>
				<option value="1">Action</option>
				<option value="2">Comedy</option>
				<option value="3">Tragedy</option>
				<option value="4">Adventure</option>
				<option value="5">Horror</option>
			</select>
			{/* </div> */}
			<button type="submit" class="btn btn-primary" style={{marginTop:"50px"}}>Xác nhận</button>
			</form>
		)
	}
}

document.addEventListener('DOMContentLoaded', function() {
	var elem = document.querySelector('.tabs'); 
	var instance = M.Tabs.init(elem, {});
	
      });
export default Add;