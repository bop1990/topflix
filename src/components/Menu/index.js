import React from 'react';
import Logo from '../../asserts/img/Logo.png';
import './Menu.css';

function Menu() {
  return (
    <div className="Menu">
      <a href="/" >
        <img className="Logo" src={Logo} alt="logo"></img>
        </a>
        <a className="ButtonLink" href="/">Novo Video</a>
    </div>
  );
}

export default Menu;
