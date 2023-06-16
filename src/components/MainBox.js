import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
  let detailsToDisplay = '';
  const [display, setDisplay] = useState('profile')
  

  if (display === 'profile') {
    detailsToDisplay = <Profile />
  } else if (display === 'photos') {
    detailsToDisplay = <Photos />
  } else if (display === 'cocktails') {
    detailsToDisplay = <Cocktails />
  } else if (display === 'pokemon')
    detailsToDisplay = <Pokemon />
  else detailsToDisplay = <Profile />

  function handleClick(e) {
    setDisplay(e.target.id)
    
  }
  console.log(display)
  return (
    <div>
      <MenuBar handleClick={handleClick} value={display} />
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
