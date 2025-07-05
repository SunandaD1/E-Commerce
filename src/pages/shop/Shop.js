import React from "react";
import { books} from "../../products";
import { Product } from "./Product";
import "./Shop.css";
import {useState} from "react";



function Shop() {



  //to search books by title, user input
  const [searchTerm, setSearchTerm] = useState("");

  //to search by toggle features
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  //for toggle filters! (by category/genre and type)
  const allCategories = [...new Set(books.map(book => book.category))];
  const allTypes = [...new Set(books.map(book => book.type))];

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleType = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };


  //for both toggle and input search filters
  const filteredBooks = books.filter((book) => {
    const matchesSearch = //input
      book.productName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = //genre of book
      selectedCategories.length === 0 ||
      selectedCategories.includes(book.category);

    const matchesType = //format of book
      selectedTypes.length === 0 ||
      selectedTypes.includes(book.type);

    return matchesSearch && matchesCategory && matchesType;
  });



  return (
      <div className="shop">
      <div className="shopTitle">
      <h1 className="boldonse-regular"> Booknanda Shop </h1>
        
      <input //for searching books by title
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchbar"
        />
      </div>
 
       {/* filter BUTTONS - tyoe and category */}
      <div className="filters"> 
        <h4 className="ibm-plex-serif">Filter by Category:</h4>
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={
              selectedCategories.includes(category) ? "filter-active" : ""
            }
          >
            {category}
          </button>
        ))}
      </div>
      <div className="filters">
        <h4 className="ibm-plex-serif">Filter by Book Type:</h4>
        {allTypes.map(type => (
          <button
            key={type}
            onClick={() => toggleType(type)}
            className={
              selectedTypes.includes(type) ? "filter-active" : ""
            }
          >
            {type}
          </button>
        ))}
      </div>

       {/* for actual products */}
      <div className="products">
        {filteredBooks.map((product) => (
          <Product data={product}/>
        ))}
      </div>
    </div>
  );
}

export default Shop;