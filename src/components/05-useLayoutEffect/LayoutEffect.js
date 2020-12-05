import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './effects.css';

export const LayoutEffect = () => {
    
    const {state, increment} = useCounter(1);

    const { data} =  useFetch(`https://www.breakingbadapi.com/api/quotes/${ state }`);

    const { quote} = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});


    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);


    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={pTag}
                > 
                    {quote} 
                </p>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3)}
            </pre>
        
            <button className="btn btn-primary"
            onClick={ () =>increment(1) }>
                Siguiente quote
            </button>

        </div>
    )
}
