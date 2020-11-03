import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import FilterBox from './FilterBox.js';
import BookList from './BookList.js';

// Books key # AIzaSyAT83fIniBQ5OTIynRpIFtsh7aifWGQgR4

// const books = [
//   {
//     title: 'bubba gump',
//     src: 'https://3d-book-css.netlify.app/book-cover.76b99e5d.png',
//     price: 14.99,
//     author: 'mia tortilla',
//     description: 'a love story about an alien and a pineapple'
//   },
//   {
//     title: 'once upon a time',
//     src: 'https://3d-book-css.netlify.app/book-cover.76b99e5d.png',
//     price: 24.99,
//     author: 'marcus',
//     description: 'fiction book about the world of elves'
//   }
// ];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchTerm: ''
    };
  }

  updateSearchTerm = (newTerm) => {
    console.log(newTerm)
    this.setState({
      searchTerm: newTerm
    })
  }
  
  searchBook = (e) => {
    e.preventDefault();
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const gBookKey = '&key=AIzaSyAT83fIniBQ5OTIynRpIFtsh7aifWGQgR4';
    // const maxResults = '&maxResults=25';
    const options = {method: 'GET'};
    const searchTerm = this.state.searchTerm;
    const fullURL = url + searchTerm + gBookKey;
    console.log(fullURL);

    fetch(fullURL, options)
      .then(response => {
        if(!response.ok){
          throw new Error('Erp... Something went wrong, try again later please')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          books: data
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      });
  }

  render(){
    const error = this.state.error
            ? <div className='error'>{this.state.error}</div>
            : '';

    return (
      <main className='App'>
        <div className='App_title'>
          <h1>Google Book Search</h1>
        </div>
        <SearchForm 
          onSubmitForm={this.searchBook}
          handleSearchTermUpdate={this.updateSearchTerm}
        />
        <FilterBox />
        {error}
        <BookList books={this.state.books.items}/>
      </main>
    );
  }
}

export default App;
