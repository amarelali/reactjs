import { useCallback, useState } from 'react'
import Button from '../../Buttons';
const UseCallBack = () => {
    const [counter, setCounter] = useState(0);
    const [decrease, setDecreaseCounter] = useState(100);

    const handleClickDecrease = useCallback(() => setDecreaseCounter((prev) => prev - 1), []);
    const handleClickIncrease = useCallback(() => setCounter(prev => prev + 1), []);

    return (
        <>
            <h1 className={"text-base"}>Use CallBack</h1>
            <h1 className={"text-base"}>Counter: {counter}</h1>
            <Button handleClick={handleClickIncrease} >Increase Counter</Button>
            <h1 className={"text-base"}>Decrease counter from 100: {decrease}</h1>
            <Button handleClick={handleClickDecrease}>Decrease Counter</Button>
        </>);
}
export default UseCallBack;