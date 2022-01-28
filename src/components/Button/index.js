import React from 'react';

const Button = ({
    TextContent,
    OnClick,
    ...props
}) => {
      
    return (
        <div>
            <button onClick={ OnClick } {...props}>{ TextContent }</button>
        </div>
    );
}

export default Button;
