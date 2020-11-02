import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
    render(){
        return(
            <div className='book'>
                <h2>{this.props.title}</h2>
                <div className='book_info'>
                    <div className='book_img'>
                        <img src={this.props.src} alt='book placeholder' />
                    </div>
                    <div className='book_details'>
                        <p>Author:  {this.props.author}</p>
                        <p>Price:  {this.props.price}</p>
                        <p>Description:  {this.props.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;