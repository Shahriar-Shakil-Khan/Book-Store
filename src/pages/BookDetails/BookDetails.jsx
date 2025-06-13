import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id}=useParams();
    const bookId=parseInt(id)
    const data=useLoaderData()
    const singleBook=data.find(book=>book.bookId===bookId);
    const {tags,bookName,image,publisher,category,review,rating,yearOfPublishing,author,totalPages}=singleBook;

    return (
        <div className='border-2  bg-gray-600 '>
                <div className='  mx-auto flex'>
            <img className='w-48 h-full mt-30 ml-16 ' src={image} alt="" />
            <div className='ml-20 mr-6 mt-10'>
                <h1 className='text-4xl font-bold'>{bookName}</h1>
                <p className='mt-4'>By: {author}</p>
                <p className='mt-4'>{category}</p>
                <p><span className='font-semibold'>Review : </span>{review}</p>
                <p className='mt-4'>Tags : {tags}</p>

                    <div className='mt-16'>
                        <p>Number of Pages : <span className='font-bold'>{totalPages}</span></p>
                        <p className='mt-4'>Publisher : <span className='font-bold'>{publisher}</span></p>
                        <p className='mt-4'>Year of Publishing : <span className='font-bold'>{yearOfPublishing}</span></p>
                        <p className='mt-4 ' >Rating : <span className='font-bold'>{rating}</span></p>
                    </div>
            </div>
                </div>
                <div className='ml-18 mb-10'>
                    <button class="btn btn-active btn-error text-white">Read</button>
                <button class="btn btn-active btn-warning ml-6 text-white">Wishlist</button>
                </div>
                
        </div>
    );
};

export default BookDetails;


