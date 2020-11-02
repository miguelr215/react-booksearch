import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    render(){
        return(
            <div className='searchForm'>
                <form>
                    <label htmlFor=''>Search: </label>
                    <input
                        type='text'
                        placeholder='book title search' 
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
};

export default SearchForm;