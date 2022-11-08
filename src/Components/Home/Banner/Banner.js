import React from 'react';

import img1 from'../Banner/rocks-g0855b5207_640.jpg'
import img2 from'../Banner/beach-gfe31ba6eb_640.jpg'
import img3 from'../Banner/duck-gafd5a80d1_640.jpg'

const Banner = () => {
    return (
        <div className='mt-10 '>
              <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={ img1} className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <h1 className='text-5xl text-zinc-50 p-8 pt-6'>Professional Photography Services For you <br />
      Why are you waiting for?</h1>
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={ img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

    <h1 className='text-5xl text-zinc-50 p-8 pt-6'>Professional Photography Services For you <br />
      Why are you waiting for?</h1>
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={ img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

    <h1  className='text-5xl text-zinc-50 p-8 pt-6'>Professional Photography Services For you <br />
      Why are you waiting for?</h1>
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
        </div>
    );
};

export default Banner;