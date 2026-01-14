// import React, { useState } from 'react';
import Book from "../Book/Book";

const Books = ({ data }) => {
  // const [allBooks,setAllBooks] = useState([]);
  // useEffect(()=>{
  //     fetch('booksData.json')
  //     .then(res=>res.json())
  //     .then(data =>{
  //         // console.log(data);
  //         setAllBooks(data);
  //     })
  // },[])
  return (
    <div>
      <h3 className="text-3xl font-bold text-center">Books</h3>
      <hr className="my-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 h-[400px]">
        {data.map((singleBook) => (
          <Book key={singleBook.bookId} singleBook={singleBook}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
