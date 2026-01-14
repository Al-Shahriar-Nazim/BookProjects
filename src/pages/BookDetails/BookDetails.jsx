import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../Utility/addToDb";

const BookDetails = () => {
  const id = useParams();
  // console.log(id);
  const data = useLoaderData();
  // console.log(data);
  const singleBook = data.find((book) => book.bookId === parseInt(id.bookId));
  console.log(singleBook);
  const { bookName, author, image } = singleBook;

  const HandleMarkAsRead = (id) => {
    addToStoreDB(id);
  };

  return (
    <div>
      <h3 className="text-3xl p-4 font-semibold">Book Details</h3>
      <div className="hero bg-base-200 min-h-screen border border-gray-300 shadow-lg rounded-2xl">
        <div className="hero-content flex-col  lg:flex-row lg:gap-20">
          <img src={image} className="w-[300px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="py-6">
              <b>Author :</b> {author} <br />
            </p>
            <button
              onClick={() => HandleMarkAsRead(id)}
              className="btn btn-primary m-2"
            >
              Mark As Read
            </button>
            <button className="btn btn-secondary m-2">Add To Wishlist</button>
            <Link to="/">
              <button className="btn btn-outline m-2">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
