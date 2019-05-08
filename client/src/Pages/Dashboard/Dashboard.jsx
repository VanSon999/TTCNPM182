import React from 'react';
import './Dashboard.scss';
import Info from './Info'
import Add from './Add'
import Delete from './Delete'
import Breadcrumbs from '../Basic/Breadcrumbs'

const dashboard = () => {
    return(
        
       
        <div className="container">
            <nav style={{background: 'rgb(225, 233, 215)'}}>
                <div className="nav-wrapper">
                <ul href="#" className="brand-logo">
                    <li style={{color:'black'}}><b>Comic VN</b></li>
                    <li><img src={"logo.png"} alt="logo" width = "60px" height = "60px"/></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a className="waves-effect waves-light btn"><i className="material-icons left">person</i>Admin</a></li>
                    <li>
                    <form action="" className="browser-default right">
                    <ul>
                        <li><input type="search" results="5" autoSave="some_unique_value" name="s" autoComplete="off" aria-label="Search box" placeholder=" Search..."/></li>
                        <li><i style={{color:'black'}} className="material-icons search-icon">search</i></li>
                    
                    </ul> 
                    </form>
                    </li>
                </ul>
                </div>
            </nav>
            
            <div className="row">
                <div className="tabs-vertical">
                    <div className="col s12 m4 l3" style={{background:'rgb(149, 233, 243)',padding:'0'}}>
                        <ul className="tabs" style ={{height:'700px',backgroundColor:'#fce4ec'}}>
                            <li className="tab"><a href="#a" className="btn waves-effect waves-light btn-large"><i className="material-icons left">dashboard</i>Dashboard</a></li>
                            <li className="tab"><a href="#b" className="btn waves-effect waves-light btn-large"><i className="material-icons left">update</i>Add/Update</a></li>
                            <li className="tab"><a href="#c" className="btn waves-effect waves-light btn-large"><i className="material-icons left">delete</i>Delete</a></li>
                        </ul>
                    </div>
                    <div className="col s12 m8 l9" style={{padding: '0'}}>
                        {/* <div id="a"><Breadcrumbs second="Dashboard"/></div>
                        <div id="b"><Breadcrumbs second="Add/Update"/></div>
                        <div id="c"><Breadcrumbs second="Delete"/></div> */}
                        <div id="a" className="tab-content">
                            <Breadcrumbs second="Dashboard"/>
                            <Info comicPic="logo.png"/>
                        </div>
                        <div id="b" className="tab-content">
                            <Breadcrumbs second="Add/Update"/>
                            <Add/>
                        </div>
                        <div id="c" className="tab-content">
                            <Breadcrumbs second="Delete"/>
                            <Delete/>
                        </div>
                    </div>
                </div>
            </div>   

            
    </div> 
    );
}

export default dashboard;


 // <div>
        //     <div className="row">
        //         <div className="col m3 center-align blue-text tits vertical-wrapper">Comic VN <img src="logo.png" alt="comicvn" height="50px"/></div>
        //         <div className="col m9">
        //             <nav className="grey darken-3">
        //             <ul className='right'>
        //                 <li>
        //                     <form>
        //                         <input id="search" type="search" required />
        //                     </form>
        //                 </li>
        //                 <li className="admin-butt">
        //                     <button className="btn">
        //                         <i className="material-icons">account_circle</i>Admin
        //                     </button>
        //                 </li>
        //             </ul>
        //             </nav>
        //         </div>
        //     </div>
        // </div>