import React from 'react';

function PlusIcon({ color, background, width, height }) {
    return (
        <svg
            width={width ? width : '24px'}
            height={height ? height : '24px'}
            fill={color ? color : 'black'}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
            ></path>
        </svg>
    );
}

export default PlusIcon;
