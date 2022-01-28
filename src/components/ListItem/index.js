import React from 'react';
import Button from '../Button';

import './index.css';

const ListItem = ({Todo, Index, HandleRemove }) => {

    const handleOnClick = () => {
        HandleRemove( Index )
    }

    return (
        <div className='ListItem-container'>
            <span>{Todo}</span>
            <Button 
                TextContent='X'
                OnClick={ handleOnClick }
                className='listitem-btn'
            />
        </div>
    );
}

export default ListItem;
