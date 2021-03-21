import React from 'react'
import Programming from '../../Asset/Images/Programming.svg';
import Spooky from '../../Asset/Images/Spooky.svg';
import Any from '../../Asset/Images/Any.svg';
import Misc from '../../Asset/Images/Misc.svg';
import Dark from '../../Asset/Images/Dark.svg';
import Christmas from '../../Asset/Images/Christmas.svg';
import Pun from '../../Asset/Images/Pun.svg';

export const CategoryImage = (props) => {

    const {category} = props;

    const handleCategoryImage = (category) => {
        console.log(category)
        if (category === "Any") return Any;
        if (category === "Programming") return Programming;
        if (category === "Spooky") return Spooky;
        if (category === "Misc") return Misc;
        if (category === "Dark") return Dark;
        if (category === "Christmas") return Christmas;
        if (category === "Pun") return Pun;
      };


    return (
             <img src={ handleCategoryImage(category) } className="category-image"/>
    )
}




