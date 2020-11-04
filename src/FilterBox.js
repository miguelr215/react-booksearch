import React, { Component } from 'react';
import './FilterBox.css';

class FilterBox extends Component {
    render(){
        return(
            <div className='filterBox'>
                <div className='filterBox_option'>
                    <label htmlFor='printType'>Print Type: </label>
                    <select
                        id='printType'
                        name='printType'
                        onChange={e => this.props.changePrintType(e.target.value)} >
                        <option value='all'>All</option>
                        <option value='books'>Books</option>
                        <option value='magazines'>Magazines</option>
                    </select>
                </div>
                <div className='filterBox_option'>
                    <label htmlFor='bookType'>Book Type: </label>
                    <select
                        id='bookType'
                        name='bookType'
                        onChange={e => this.props.changeBookType(e.target.value)}>
                        <option value='none'>No Filter</option>
                        <option value='ebooks'>All ebooks</option>
                        <option value='free-ebooks'>Free ebooks</option>
                        <option value='paid-ebooks'>Paid ebooks</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default FilterBox;