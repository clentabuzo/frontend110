import React from 'react';

function SquareIcon({ color, background, width, height }) {
    return (
        <svg
            width={width ? width : '30px'}
            height={height ? height : '30px'}
            fill={color ? color : '#757779'}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M3 3H11V11H3V3ZM3 13H11V21H3V13ZM13 3H21V11H13V3ZM13 13H21V21H13V13ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z"></path>
        </svg>
    );
}

export default SquareIcon;
