import React, {useState, useContext} from 'react'
import Card from './Card';
import './Components.css'
import { DataContext } from './context/data-contex';

export default function GameSetup() {

    const {setArr,row,setRow,col,setCol,setGameSetupClick,gameSetupClick} = useContext(DataContext)
    
    
    const [questionArr, setQuestionArr] = useState([]);
    const [message, setMessage] = useState("");

    function fillArray() {
        setGameSetupClick(!gameSetupClick)
        if(row >5 || col > 5) {
            setMessage("Row and Column value should be less than 5")
            return;
        }
        setMessage("");
        let pA = new Array(Math.floor(Number(row))).fill(1).map(()=> new Array(Math.floor(Number(col))).fill(1));
        setQuestionArr(pA) 
        setArr(pA)
    }
    function getUpdate(rowInd, colInd,isClicked) {
        if(isClicked) {
            setQuestionArr(prev => {
                
                let temp = JSON.parse(JSON.stringify(prev))
                temp[rowInd][colInd] = 1
                setArr(temp)
                
                return temp
            })
            
        }else {
            setQuestionArr(prev => {
                
                let temp = JSON.parse(JSON.stringify(prev))
                temp[rowInd][colInd] = 0
                
                setArr(temp)
                return temp
            })
            
        }
        
    } 
   
    
    
    
  return (
    <div className='game-setup-container'>
        <div className='input-container'>
            <input name='row' placeholder='Enter no of rows '
            value={row} onChange={(event)=>setRow(event.target.value)} />
            <input name='col' placeholder='Enter no of columns'
            value={col} onChange={(event)=>setCol(event.target.value)} />
            <button onClick={fillArray} style = {{
                display:gameSetupClick? "":"",
            }}>Game Setup</button>
        </div>
        <div className='alert'>{message}</div>
         <div className='game-setup' >
            <Card arr = {questionArr} 
              getUpdate = {getUpdate} />
         </div>
    </div>
  )
}
