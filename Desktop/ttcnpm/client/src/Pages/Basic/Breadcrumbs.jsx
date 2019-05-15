import React from 'react';
import './Breadcrumbs.scss';

const breadcrumb = () => {
    return (
        <nav id="breadcrumbs">
        <div class="nav-wrapper">
          <div class="col s12">
            <a href="#!" className="breadcrumb">First</a>
            <a href="#!" className="breadcrumb">Second</a>
            <a href="#!" className="breadcrumb">Third</a>
          </div>
        </div>
        </nav>
    );
}
export default breadcrumb;