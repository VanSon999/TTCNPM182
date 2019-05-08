import React from 'react';
import './Dashboard/Dashboard.scss';
import Info from './Dashboard/Info';
import Add from './Dashboard/Add';
import Delete from './Dashboard/Delete';

const dashboard = () => {
    return(
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
        <div className="container">
            <nav style={{background: 'rgb(225, 233, 215)'}}>
                <div className="nav-wrapper">
                <ul href="#" className="brand-logo">
                    <li style={{color:'black'}}><b>Comic VN</b></li>
                    {/* <li><img src={"logo.png"} alt="logo" width = "60px" height = "60px"/></li> */}
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a className="waves-effect waves-light btn"><i className="material-icons left">person</i>Admin</a></li>
                    <li>
                    <form action="" className="browser-default right">
                    <ul>
                        {/* <li><input id="search-input" placeholder=" Search..." type="text" className="browser-default search-field" name="q" value="" autocomplete="off" aria-label="Search box"/></li> */}
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
                    <div className="col s12 m4 l3" style={{background:'rgb(149, 233, 243)'}}>
                        <ul className="tabs">
                            <li className="tab"><a href="#a" className="btn waves-effect waves-light btn-large"><i className="material-icons left">dashboard</i>Dashboard</a></li>
                            <li className="tab"><a href="#b" className="btn waves-effect waves-light btn-large"><i className="material-icons left">update</i>Add/Update</a></li>
                            <li className="tab"><a href="#c" className="btn waves-effect waves-light btn-large"><i className="material-icons left">delete</i>Delete</a></li>
                        </ul>
                    </div>
                    <div className="col s12 m8 l9"> 
                        <div id="a" className="tab-content"><Info comicPic="logo.png"/></div>
                        <div id="b" className="tab-content"><Add/></div>
                        <div id="c" className="tab-content"><Delete/></div>
                    </div>
                </div>
            </div>   

            {/* <div class="row">
                <div class="tabs-vertical">
                    <div class="col s4 m3 l2">
                        <ul class="tabs">
                            <li class="tab">
                                <a class="active" href="#ActiveDirectory">Active Directory</a>
                            </li>
                            <li class="tab">
                                <a href="#Smtp">SMTP (Email)</a>
                            </li>
                            <li class="tab">
                                <a href="#General">General</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col s8 m9 l6">
                        <div id="ActiveDirectory" class="tab-content">a</div>
                        <div id="Smtp" class="tab-content">b</div>
                        <div id="General" class="tab-content">c</div>
                    </div>
                </div>
            </div> */}
    </div> 
    );
}

export default dashboard;