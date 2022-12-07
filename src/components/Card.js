import React, { Fragment,useContext,useEffect,useState } from "react";
import './Components.css'
import "./Components.css";
import Rat from "./Rat";
import WhiteDiv from "./WhiteDiv";
import { DataContext } from "./context/data-contex";

import Destination from "./Destination";


export default function Card({arr,getUpdate}) {
  
  const {col,gameSetupClick} = useContext(DataContext)
  const [newArr, setNewArr] = useState([])
  useEffect(() => {
    let temp = arr.map((row, i) => {
      let colLength = row.length;
      return (
        <Fragment key={i}>
          {row.map((ele, j) => {
  
            if (i === 0 && j === 0 ) {
             
              return <Rat key={`${i},${j}`} />;
            }
  
            if (i === arr.length - 1 && j === colLength - 1 ) {
              
              return <Destination key={`${i},${j}`} />;
            }
  
  
            if (ele === 1 || ele === 0) {
              
              return <WhiteDiv key={`${i},${j}`} id={`${i},${j}`} 
              getUpdate = {getUpdate}  />;
            }
  
            else return (
              <h1 key={`${i},${j}`}>Hello</h1>
            )
  
          })}
        </Fragment>
      );
    });
    setNewArr(temp)
  },[arr, getUpdate,gameSetupClick])
  


  return <div className="problem-setup" style={{gridTemplateColumns: `repeat(${col},1fr)`}}>
    {newArr}</div>;
}
