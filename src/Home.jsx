import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, decrementCountByValue, incrementCount, incrementCountByValue } from './Reducers';

const Home = () => {
    const dispatch = useDispatch();

    const count = useSelector(state => state.count);

    const addBtn = () => {
        dispatch(incrementCount());
    };

    const addBtn25 = () => {
        dispatch(incrementCountByValue(25));
    };

    const subBtn = () => {
        dispatch(decrementCount());
    };
    const subBtn10 = () => {
        dispatch(decrementCountByValue(10));
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={addBtn}>Increment</button>
            <button onClick={addBtn25}>Increment By 25</button>
            <button onClick={subBtn}>Decrement</button>
            <button onClick={subBtn10}>Decrement By 10</button>
        </div>
    );
};

export default Home
