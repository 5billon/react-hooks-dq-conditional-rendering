import React from "react";

function MenuBar({handleClick, value}) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
 

  return (
    <div className="ui four item menu">
      <span className={value === 'profile' ? "item active": 'item'} onClick={handleClick} id='profile'>
        <i className="user large icon" id='profile' />
      </span>

      <span className={value === 'photos'? "item active": 'item'} onClick={handleClick} id='photos'>
        <i className="photo large icon" id='photos' />
      </span>

      <span className={value === 'cocktails' ? "item active": 'item'} onClick={handleClick} id='cocktails'>
        <i className="cocktail large icon" id='cocktails' />
      </span>

      <span className={value === 'pokemon' ? "item active": 'item'} onClick={handleClick} id='pokemon'>
        <i className=" themeisle large icon" id='pokemon' />
      </span>
    </div>
  );
}

export default MenuBar;
