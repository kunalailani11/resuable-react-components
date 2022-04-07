import React from 'react';

const TextInput = ({ name = 'name', placeholder = 'Enter your name' }) => {
    return (
        <input type="text" name={name} placeholder={placeholder} />
    )
}

export default TextInput;