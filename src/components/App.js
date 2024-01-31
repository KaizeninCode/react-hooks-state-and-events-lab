import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setAppClass]  = useState('App light')
  const [btnText, setbtnText]  = useState('Dark mode')
  

  const handleClick = () => {
    if(btnText === 'Dark mode') {
      setAppClass('App dark')
      setbtnText('Light mode')
    } else {
      setAppClass('App light')
      setbtnText('Dark mode')
    }
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{btnText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
