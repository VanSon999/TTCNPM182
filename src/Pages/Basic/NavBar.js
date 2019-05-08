import React from 'react';
import './NavBar.css';

const navbar = () => {
    return (
    <nav className='grey darken-3'>
    <div className="row">
        <div className="col s5">
          <ul className='left brand-logo'>
            <li><b>Comic VN</b></li>
            <li><img src={"logo.png"} alt="logo" style={{width:"auto", height:"65px"}} /></li>
          </ul>
          </div>
        <div className="col s7">
          <ul className='right'>
            <li><a href='#'>Login</a></li>
            <li>
            <form>
                <input id="search" type="search" required />
            </form>
            </li>
          </ul>
        </div>
          </div>
     </nav>);
}
export default navbar;