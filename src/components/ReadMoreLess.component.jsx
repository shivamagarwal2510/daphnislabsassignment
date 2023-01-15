import React from "react";
import { useState } from "react";
const ReadMoreLess = ({children})=>{
    const [isReadMoreShown, setReadMoreShown] = useState(false);
    const toggleBtn = ()=>{
        setReadMoreShown(prev => !prev);
    }
    return(
        <>
        <span className="p-[10px]">
            {isReadMoreShown? children: children.substr(0,150)}
            <button className=" text-blue-700" onClick={toggleBtn}>{isReadMoreShown? "Read Less": "...Read More"}</button>
        </span>
        </>
    )
}
export default ReadMoreLess;