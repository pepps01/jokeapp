import React from 'react'
import "./Randomiser.scss"
import './../utils/constants'


export const Randomiser = (props) =>{
    return (
        <div>
          <button  className="joke-randomiser" onClick={() => props.refresh()}> Randomiser</button>
        </div>
    );
};
