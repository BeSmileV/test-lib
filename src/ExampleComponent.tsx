import * as React from 'react';
import style from './style.module.scss';
import {ReactComponent as TestSVG} from './test.svg'
import {useState} from "react";

export type ClassNameType = {
    test?: string,
    inner?: string,
    icon?: string,
}

export type PropsType = {
    text: string,
    className?: ClassNameType
}

export function ExampleComponent({text, className = style}: PropsType) {
    const [test, setTest] = useState('1')
    return (
        <div className={className?.test}>
            <div className={className?.inner}>
                {text}
            </div>
            {test}
            <button onClick={() => setTest(prevState => prevState + 1)}>+</button>
            <div className={className?.icon}>
                <TestSVG/>
            </div>
        </div>
    );
}

export default ExampleComponent;