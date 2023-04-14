import React from "react";
import { useState } from "react";
import "./styleres.css";
import MenuCard from "./MenuCard";
import Menu from "./MenuApi";
import Navbar from "./Navbar";

const uniqueitem = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
"All"];


const Dietplan = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueitem);

  const filteritem = (category) => {
    if(category === "All"){
setmenuData (Menu)
      return;
    }
    const updateietm = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updateietm);
  };

  return (
    <>
     <Navbar filteritem={filteritem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Dietplan;
