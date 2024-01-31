import React, { useState }from "react";

function Item({ name, category }) {
  const [listClass, setListClass] = useState('')
  const [btnText, setBtnText] = useState('Add to Cart')

  function handleClick(){
    if(listClass === ''){
      setListClass('in-cart')
      setBtnText('Remove From Cart')
    } else {
      setListClass('')
      setBtnText('Add to Cart')
    }
  }

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{btnText}</button>
    </li>
  );
}

export default Item;
