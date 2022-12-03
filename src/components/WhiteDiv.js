import React,{useState} from 'react'
import './Components.css'

export default function WhiteDiv({id, getUpdate}) {

  const [isClicked, setIsClicked] = useState(false)

  function getDetails(e) {
    let temp = e.target.id.split(',')
    let rowInd = Number(temp[0])
    let colInd = Number(temp[1])
    setIsClicked(!isClicked)
    
    getUpdate(rowInd,colInd,isClicked)
   
  }
  return (
    <div className={!isClicked? "white":"red"} onClick={getDetails} id = {id}></div>
  )
}
