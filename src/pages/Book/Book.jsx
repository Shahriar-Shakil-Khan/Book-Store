import React, { use } from 'react';
import { FaRegStar } from "react-icons/fa";

const Book = ({singleBook}) => {
    //bookPromise
    // const data=use(bookPromise)
    // console.log("hi",data)
    const {bookName,author,image,rating,category,review,tags,yearOfPublishing,publisher}=singleBook;
    return (
        <div className="card  w-96  border  bg-gray-500 p-6 shadow-2xl">
  <figure className='p-3   bg-gray-400'>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-10'>
        {
        tags.map(tag=><button>{tag}</button>)
    }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary ">{yearOfPublishing}</div>
    </h2>
    <p>Book by : {publisher}</p>
    <div className='border-t-2 border-dashed'></div>
    <div className="card-actions justify-around">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaRegStar /></div>
    </div>
  </div>
</div>
    );
};

export default Book;