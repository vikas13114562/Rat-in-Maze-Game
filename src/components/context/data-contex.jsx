import React, {useState,createContext } from 'react'


export const DataContext = createContext({
    arr:[],
    size:0,
    setArr:()=>{},
})



export const DataProvider = ({children}) => {


    // const problemArr = [
    //     [1,1,1,0],
    //     [1,1,1,1],
    //     [1,1,1,1],
    //     [1,1,1,1],
    // ]
    
    const [arr,setArr] = useState([])
   
   
    const [size] = useState(arr.length)
   
    
    

    const value = {arr,size,setArr}

    return (
        <DataContext.Provider value={value} >{children}</DataContext.Provider>
    )
    
}