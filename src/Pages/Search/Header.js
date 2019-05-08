import React, { Component } from 'react';
import "./Header.css";
class Header extends Component {
    render() {
        return (
            <nav className='grey darken-3 header'>
                <div className='brand-logo'>
                    <div className="row">
                        <ul className='right col s0.5'>
                            <li><b>Comic VN</b></li>
                        </ul>
                        <ul className='right col s7.5'>
                            <li><b>Comic VN</b></li>
                        </ul>
                    </div>

                </div>
                <ul className='right'>
                    <li><a href='#'>Login</a></li>
                    <li>
                        <form>
                            <input id="search" type="search" required />
                        </form>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
