/** @format */

import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import TitleHeader from "./Component/TitleHeader";
import Categories from "./Component/Categories";
import Card from "./Component/Card";
import { Data } from "./Data";

const App = () => {
  const [DataMeals , setDataMeals] = useState(Data);

  // all Categories unqe
  const allCategories = [ 'الكل',...new Set(Data.map((e)=>e.category))]
  console.log(allCategories)
  // filtter category function 
  const filterCategory = (cat) =>{
   if(cat === 'الكل'){
    setDataMeals(Data);
   }else {
    const newArr = Data.filter((e) => e.category === cat);
    setDataMeals(newArr);
   }
  }
  // filtter category Function search
  const filterCategorySearch = (word)=> {
    const newArr = Data.filter((e)=>e.titel === word);
    setDataMeals(newArr);
  }
  return (
    <div className="color-body font">
      <NavBar filterCategorySearch ={filterCategorySearch} />
      <div className="container">
        <TitleHeader/>
        <Categories filterCategory={filterCategory} allCategories={allCategories}/>
        <Card DataMeals={DataMeals}/>
      </div>
    </div>
  );
};

export default App;
