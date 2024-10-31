import React from 'react';
import { useState } from 'react';

const Home = () => {
    const[num, setNum] = useState(0)

    const plus = () =>{
        if (num + 5 > 20){
            setNum(20)
        } else {
            setNum(num + 5)
        }
    }

    const minus = () =>{
        if (num - 5 < 0){
            setNum(0)
        } else{
            setNum(num - 5)
        }
    }

    const minusOne = () =>{
        if (num <= 0){
            setNum(0)
        } else{
            setNum(num - 1)
        }
    }

    const plusOne = () =>{
        if (num >= 20){
            setNum(0)
        } else{
            setNum(num + 1)
        }
    }
    return (
        <div>
            <button onClick={plus}>+5</button>
            <h1>{num}</h1>
            <button onClick={minus}>-5</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={plusOne}>+1</button>
        </div>
    );
}

export default Home;
