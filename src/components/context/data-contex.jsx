import React, {useState,createContext } from 'react'


export const DataContext = createContext({
    arr:[],
    size:0,
    solutionArr:[],
})

function solve(i,j,problemArr,visArr,dirI,dirJ,solutionArr,n) {
    if(i === n-1 && j=== n-1) {
        let temp = JSON.parse(JSON.stringify(visArr))
        solutionArr.push(temp);
        return;
    }

    for(let ind =0; ind < n; ind++) {
        let nextI = i + dirI[ind]
        let nextJ = j + dirJ[ind]

        if(nextI >= 0 && nextJ >= 0 && nextI < n && nextJ < n
             && visArr[nextI][nextJ]===0 && problemArr[nextI][nextJ] === 1){
                
                visArr[nextI][nextJ] = 2
                
                solve(nextI, nextJ,problemArr,visArr,dirI,dirJ,solutionArr,n);
                visArr[nextI][nextJ] = 0
             }
    }
}

export const DataProvider = ({children}) => {


    const problemArr = [
        [1,0,0,0],
        [1,1,1,1],
        [1,1,0,0],
        [1,1,1,1],
    ]
    
    const [arr, setArr] = useState(problemArr)
    const ans = []
    const [solutionArr, setSolutionArr] = useState([])
    const [size, setSize] = useState(problemArr.length)
    const visArr = [];
    
    for(let r=0; r<4; r++) {
        let temp = []
        for(let c=0; c<4; c++) {
            temp.push(0)
        }
        visArr.push(temp)
    }

    // const [vis, setVis] = useState(visArr)

    
    const dirI = [1,0,0,-1];
    const dirJ = [0,-1,1,0];

    
    
    
    

    const value = {arr,size,solutionArr}

    return (
        <DataContext.Provider value={value} >{children}</DataContext.Provider>
    )
    
}