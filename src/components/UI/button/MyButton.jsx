import React from 'react';
import c from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={c.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;