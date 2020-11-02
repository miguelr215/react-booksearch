import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import FilterBox from './FilterBox.js';
import BookList from './BookList.js';

// Google Books API key # AIzaSyAT83fIniBQ5OTIynRpIFtsh7aifWGQgR4

const books = [
  {
    title: 'bubba gump',
    src: 'https://3d-book-css.netlify.app/book-cover.76b99e5d.png',
    price: 14.99,
    author: 'mia tortilla',
    description: 'a love story about an alien and a pineapple'
  },
  {
    title: 'once upon a time',
    src: 'https://3d-book-css.netlify.app/book-cover.76b99e5d.png',
    price: 24.99,
    author: 'marcus',
    description: 'fiction book about the world of elves'
  }
];

class App extends Component {

  render(){
    return (
      <main className='App'>
        <div className='App_title'>
          <h1>Google Book Search</h1>
        </div>
        <SearchForm />
        <FilterBox />
        <BookList books={books}/>
      </main>
    );
  }
}

export default App;
