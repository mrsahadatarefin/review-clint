import React from 'react';
import img1 from'../File/woman-g05039bdca_640.jpg'
import img2 from'../File/tree-gd4d2d98c0_640.jpg'
import img3 from'../File/bird-g704750b34_640.jpg'

const File = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1  gap-5 mt-12  ">

            <div ><img className='rounded-lg  p-5' src={img1} alt=""  />
            <h1 className='p-5 text-center text-2xl'>camera:Canon EOS 5d Mark </h1>
            
            
            </div>
            <div ><img className='rounded-lg p-5' src={img2} alt=""  />
            <h1 className='p-5 text-center text-2xl'>camera:Canon EOS 4d Mark</h1>
            
            </div>
            <div ><img className='rounded-lg p-5' src={img3} alt=""  />
            
            <h1 className='p-5 text-center text-2xl'>camera:Canon EOS 3d Mark</h1>
            
             </div>




            
        </div>
    );
};

export default File;