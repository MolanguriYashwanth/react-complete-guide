import React from "react";
const withClassA = (WrappedCmponent,className)=>{
    return (props)=>(
        <div className={className}>
            <WrappedCmponent {...props}/>
        </div>
    )
}
export default withClassA;