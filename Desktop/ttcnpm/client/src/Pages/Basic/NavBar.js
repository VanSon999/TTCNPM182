import React,{Component} from 'react';

// const navbar = () => {
//     return (
//     <nav className='grey darken-3'>
//         <div className='brand-logo'>
//           <ul className='right'>
//             <li><b>Comic VN</b></li>
//             <li><img src={"logo.png"} alt="logo" width = "65px" height = "65px"/></li>
//           </ul>
//           </div>
//           <ul className='right'>
//             <li><a href='/search'>Tìm Kiếm</a></li>
//             <li>
//             <form>
//                 <input id="search" type="search" required />
//             </form>
//             </li>
//           </ul>
//      </nav>);
// }
class navbar extends Component{
	constructor(){
		super();
		this.state = {
			comicName : " "
		}
		this.onChange = this.onChange.bind(this);
		// this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e){
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	// onSubmit(e){	
	// 	e.preventDefault()
	// 	const newComic = {
	// 		comicName : this.state.comicName,
	// 		author : this.state.author
	// 	}
	// 	addComic(newComic).then(res=>{
	// 		console.log("Add thành công!!!");
	// 	})
	// }
	render(){
    var url = "/search" + "?" + "c=" + this.state.comicName;
    return (
      <nav className='grey darken-3'>
          <div className='brand-logo'>
            <ul className='right'>
              <li><b>Comic VN</b></li>
              <li><img src={"logo.png"} alt="logo" width = "65px" height = "65px"/></li>
            </ul>
            </div>
            <ul className='right'>
              <li><a href={url}>Tìm Kiếm</a></li>
              <li>
              <form>
                  <input id="search" name="comicName" type="search" onChange={this.onChange} required />
              </form>
              </li>
            </ul>
       </nav>);
	}
}

export default navbar;