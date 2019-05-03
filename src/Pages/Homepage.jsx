import React from 'react';
import './Homepage.css';
import TopComic from './TopComic/TopComic.js';
import RecentUpload from './RecentUpload/RecentUpload.js';
import NavBar from './Basic/NavBar.js';
import Footer from './Basic/Footer.js';

const homepage = () => {
    return (
      <div>
      <div className='container'>
        <NavBar />
        <span className="tit">Top Comics</span>
        <div className="row">
          <TopComic comicPic="logo.png" comicName="Name 1" />
          <TopComic comicPic="logo.png" comicName="Name 2" />
          <TopComic comicPic="logo.png" comicName="Name 3" />
          <TopComic comicPic="logo.png" comicName="Name 4" />
        </div>  
        <span className="tit">Recent Uploads</span>
        <RecentUpload comicPic="logo.png" comicDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <RecentUpload comicPic="logo.png" comicDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <RecentUpload comicPic="logo.png" comicDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <RecentUpload comicPic="logo.png" comicDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />       
      </div>
      <div>
      <Footer />
      </div>
      </div>
    );
  }

export default homepage;
