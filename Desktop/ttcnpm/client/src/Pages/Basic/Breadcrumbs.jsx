import React from 'react';
import './Breadcrumbs.scss';

const breadcrumb = () => {
    return (
        <nav id="breadcrumbs">
        <div class="nav-wrapper">
          <div class="col s12">
            <a href="#!" class="breadcrumb">First</a>
            <a href="#!" class="breadcrumb">Second</a>
            <a href="#!" class="breadcrumb">Third</a>
          </div>
        </div>
        </nav>
    );
}
export default breadcrumb;