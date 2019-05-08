import React from 'react';

const navbar = () => {
    return (
    <nav className='grey darken-3'>
        <div className='brand-logo'>
          <ul className='right'>
            <li><b>Comic VN</b></li>
            <li><img src={"logo.png"} alt="logo" height = "63px"/></li>
          </ul>
          </div>
          <ul className='right'>
            <li><a href='#'>Login</a></li>
            <li>
            <form>
                <input id="search" type="search" required />
            </form>
            </li>
          </ul>
     </nav>);
}
export default navbar;