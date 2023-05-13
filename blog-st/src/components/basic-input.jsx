import React from 'react';

function BasicInput(props) {
    return (
        <div className={`basic-input ${props.error ? 'error' : ''}`}  >
        <input className={props.error ? 'error' : ''} {...props} />
        {props.children}
        <aside>{props.helptext || props.error || ' '}</aside>
    </div>
    )
}

export default BasicInput;