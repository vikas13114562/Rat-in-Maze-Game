import React, {useState,createContext } from 'react'


export const DataContext = createContext({
    arr:[],
    size:0,
    setArr:()=>{},
    row:"",
    setRow:() =>{},
    col:"",
    setCol:()=>{},
})



export const DataProvider = ({children}) => {

    const [row, setRow] = useState("");
    const [col, setCol] = useState("");
    const [arr,setArr] = useState([])
   
   
    const [size] = useState(arr.length)
   
    
    

    const value = {arr,size,setArr,row,col,setCol,setRow}

    return (
        <DataContext.Provider value={value} >{children}</DataContext.Provider>
    )
    
}