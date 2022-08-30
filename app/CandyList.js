import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCandy } from './actions';

export default function CandyList() {
    const dispatch = useDispatch();
    const candies = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchCandy());
    }, []);

    return (
        <div className="candy-list">
            {candies.map(candy => (
                <div key={candy.id}>
                    <img src={candy.imageUrl} />
                    <h3>{candy.name}</h3>
                    <p>{candy.description}</p>
                    <p>{candy.quantity}</p>
                </div>
            ))}
        </div>
    );
}
