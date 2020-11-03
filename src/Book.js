import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
    render(){
        return(
            <div className='book'>
                <h2>{this.props.volumeInfo.title}</h2>
                <div className='book_info'>
                    <div className='book_img'>
                        <img src={this.props.volumeInfo.imageLinks.smallThumbnail} alt='book cover' />
                    </div>
                    <div className='book_details'>
                        <p>Author:  {this.props.volumeInfo.authors}</p>
                        {/* <p>Price:  {this.props.saleInfo.listPrice.amount}</p> */}
                        <p>Published Date: {this.props.volumeInfo.publishedDate}</p>
                        <p>Print Type:  {this.props.volumeInfo.printType}</p>
                        <p>Category:  {this.props.volumeInfo.categories}</p>
                        <a 
                            href={this.props.saleInfo.buyLink}
                            target='_blank'
                            rel='noopener noreferrer'>
                                Buy Here
                        </a>
                        <p>Description:  {this.props.volumeInfo.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;