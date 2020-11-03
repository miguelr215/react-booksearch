import React, { Component } from 'react';
import './BookList.css';
import Book from './Book.js';

class BookList extends Component {
    render(){
        console.log(this.props.books);
        const booklist = this
            .props
            .books
            .map((book, index) => <Book {...book} key={index}/>);

        return(
            <div className='BookList'>
                {booklist}
            </div>
        )
    }
}

BookList.defaultProps = {
    books: []
}

export default BookList;