import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from './counterSlice';

function IncrementByAmount() {
    const [amount, setAmount] = useState(0);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleChange = (e) => setAmount(e.target.value);

    const handleIncrement = () => {
        dispatch(incrementByAmount(Number(amount)));
    };

    return (
        <div>
            <h3>Current Count: {count}</h3>
            <input
                type="number"
                value={amount}
                onChange={handleChange}
                placeholder="Enter amount"
            />
            <button onClick={handleIncrement}>Increment by Amount</button>
        </div>
    );
}

export default IncrementByAmount;