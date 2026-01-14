const getStoredBook = () => {
  const storedBookStr = localStorage.getItem("readlist");
  if (storedBookStr) {
    const storedBookData = JSON.parse(storedBookStr);
    return storedBookData;
  }
  else{
    return[];
  }
};

const addToStoreDB = (id) =>{
    const storedBooksData = getStoredBook();
    if(storedBooksData.includes(id)){
        alert('Bhai ey id to already exist');
    }
    else{
        storedBooksData.push(id);
        const data = JSON.stringify(storedBooksData);
        localStorage.setItem("readlist",data);
    }
}

export{addToStoreDB};