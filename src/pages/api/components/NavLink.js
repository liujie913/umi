import React from 'react';
import { NavLink } from "umi";

const NavLinkDemo = () =>{
  return(
    <NavLink to='/list?aa=22'         activeStyle={{
      fontWeight: 'bold',
      color: 'red',
    }}> 进入table </NavLink>
  );
}

export default NavLinkDemo;
