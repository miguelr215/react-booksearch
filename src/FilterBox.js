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
                        name='printType' >
                            {/* printTypeOptions */} 
                    </select>
                </div>
                <div className='filterBox_option'>
                    <label htmlFor='bookType'>Book Type: </label>
                    <select
                        id='bookType'
                        name='bookType'>
                            {/* bookTypeOptions */}
                    </select>
                </div>
            </div>
        )
    }
}

export default FilterBox;