import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    render(){
        return(
            <div className='searchForm'>
                <form onSubmit={e => this.props.onSubmitForm(e)}>
                    <label htmlFor=''>Search: </label>
                    <input
                        type='text'
                        placeholder='book title search'
                        onChange={e => this.props.handleSearchTermUpdate(e.target.value)}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
};

export default SearchForm;