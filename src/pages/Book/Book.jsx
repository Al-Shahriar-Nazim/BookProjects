import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  console.log(singleBook);
  const { bookName, image, publisher, category, rating, tags,yearOfPublishing,bookId } =
    singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-lg border border-gray-300">
        <figure className="p-10 bg-gray-200 mx-auto rounded-lg mt-3">
          <img src={image} className="h-[186px] rounded-lg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="mx-auto">
            {
              tags.map((tag,index)=><span key={index} className=" mr-6 text-green-500">#{tag}</span>)
            }
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>
           <b>By :</b>{publisher}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
