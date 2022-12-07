import React, {useState,createContext } from 'react'


export const DataContext = createContext({
    arr:[],
    size:0,
    setArr:()=>{},
    row:"",
    setRow:() =>{},
    col:"",
    setCol:()=>{},
    gameSetupClick:false,
    setGameSetupClick:()=>{},
    
})



export const DataProvider = ({children}) => {

    const [row, setRow] = useState("");
    const [col, setCol] = useState("");
    const [arr,setArr] = useState([])
    const [gameSetupClick,setGameSetupClick] = useState(false)
    
   
    const [size] = useState(arr.length)
   
    
    

    const value = {arr,size,setArr,row,col,setCol,
                    setRow,gameSetupClick,setGameSetupClick}

    return (
        <DataContext.Provider value={value} >{children}</DataContext.Provider>
    )
    
}