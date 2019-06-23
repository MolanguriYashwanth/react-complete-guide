import React from 'react';
const WithClass = (props)=>(
    <div className={props.classes} style={props.styles}>
        {props.children}
    </div>
)
export default WithClass;