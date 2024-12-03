import React, {ReactElement, useState} from "react";
import TestSVG from './test.svg'
import testStyle from './test.module.scss'
import clsx from "clsx";

export type TestCompPropsType = {
    label?: string,
    active?: boolean,
    className?: {
        test?: string,
        active?: string,
        icon?: string,
        label?: string,
        btn?: string,
    },
    icon?: ReactElement,
}

export const TestComp: React.FC<TestCompPropsType> = ({label, active, icon = <TestSVG/>, className = testStyle}) => {
    const [test, setTest] = useState<number>(0)

    return (
        <div className={clsx(className.test, {
            [className?.active]: active,
        })}>
            <div className={className.icon}>{icon}</div>
            <span className={className.label}>{label}: {test}</span>
            <button onClick={() => setTest(prevState => prevState + 1)} className={className.btn}>+</button>
            <button onClick={() => setTest(prevState => prevState - 1)} className={className.btn}>-</button>
        </div>
    )
}

export default TestComp;