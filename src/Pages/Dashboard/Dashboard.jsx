import React from 'react';
import './Dashboard.scss';

const dashboard = () => {
    return(
        <div>
            <div className="row">
                <div className="col m3 center-align blue-text tits vertical-wrapper">Comic VN <img src="logo.png" alt="comicvn" height="50px"/></div>
                <div className="col m9">
                    <nav className="grey darken-3">
                    <ul className='right'>
                        <li>
                            <form>
                                <input id="search" type="search" required />
                            </form>
                        </li>
                        <li className="admin-butt">
                            <button className="btn">
                                <i className="material-icons">account_circle</i>Admin
                            </button>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default dashboard;