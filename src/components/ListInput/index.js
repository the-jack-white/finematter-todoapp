import React from 'react';
import Button from '../Button';

import './index.css';

const ListInput = ({ HandleOnClick, HandleOnChange }) => {
    return (
        <div className='ListInput-container'>
            <div className='input-container'>
                <input onChange={ HandleOnChange } type="text" id="input-item" name="input-item" placeholder='Enter List Item' />
            </div>
            <div className='input-btn-container'>
                <Button 
                    TextContent='Add Item'
                    OnClick={ HandleOnClick }
                    className='input-btn'
                />
            </div>
        </div>
    )
}

export default ListInput;
