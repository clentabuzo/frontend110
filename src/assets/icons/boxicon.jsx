import React from 'react';

function BoxIcon({ color, background, width, height }) {
    return (
        <svg
            width={width ? width : '24px'}
            height={height ? height : '24px'}
            fill={color ? color : 'black'}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M20.5021 5.92225 12 1 3.49793 5.92225 12 10.8445 20.5021 5.92225ZM2.5 7.6555V17.5L11 22.4211V12.5765L2.5 7.6555ZM13 22.4211 21.5 17.5V7.6555L13 12.5765V22.4211Z"></path>
        </svg>
    );
}

export default BoxIcon;
