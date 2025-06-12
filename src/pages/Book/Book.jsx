import React, { use } from 'react';

const Book = ({singleBook}) => {
    //bookPromise
    // const data=use(bookPromise)
    // console.log("hi",data)
    const {bookName,author,image}=singleBook;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='p-3'>
    <img className=''
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default Book;