import React from 'react';


const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '53.5vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll;