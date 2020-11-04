import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
    render(){
        let price = 'no price found';
        if(this.props.saleInfo.listPrice !== undefined){
            price = this.props.saleInfo.listPrice.amount;
        }

        let src = 'https://via.placeholder.com/150';
        if(this.props.volumeInfo.imageLinks !== undefined){
            src = this.props.volumeInfo.imageLinks.smallThumbnail;
        }

        let buyIt = 'BUY HERE';
        if(this.props.saleInfo.saleability === 'NOT_FOR_SALE'){
            buyIt = 'sorry not available for purchase'
        }
        return(
            <div className='book'>
                <h2>{this.props.volumeInfo.title}</h2>
                <div className='book_info'>
                    <div className='book_img'>
                        <img src={src} alt='book cover' />
                    </div>
                    <div className='book_details'>
                        <p>Author:  {this.props.volumeInfo.authors}</p>
                        <p>Published Date: {this.props.volumeInfo.publishedDate}</p>
                        <p>Print Type:  {this.props.volumeInfo.printType}</p>
                        <p>Category:  {this.props.volumeInfo.categories}</p>
                        <p className='book_pricing_top'>Price:  {price}</p>
                        <p className='book_pricing_bottom'>
                            <a 
                                href={this.props.saleInfo.buyLink}
                                target='_blank'
                                rel='noopener noreferrer'>
                                    {buyIt}
                            </a>
                        </p>
                        <p>Description:  {this.props.volumeInfo.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;