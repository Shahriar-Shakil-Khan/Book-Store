import React from 'react';
import bookImage from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className='flex justify-around items-center mx-auto'>
            <div>
                <h1 className='text-5xl'>Books to freshen up <br />your bookshelf.</h1>
                <button className='btn btn-success w-32 mt-8'>View The List</button>
            
            </div>
            
            <div>
                <img src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;