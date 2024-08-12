import {useState, useMemo} from "react";

const UseMemo = () => {
    const [val, setVal] = useState('');


    const expensiveFn = useMemo(() => {
        let sum = 0;
        for (let i = 0; i < 10_000_000; i++) {
            sum += i;
        }
        return sum;
    },[])

    return (<>
        <h1 className={"text-base"}>Use memo</h1>
        <input value={val} onChange={e=>setVal(e.target.value)} />
        <h1 className={"text-base"}>Total : {expensiveFn}</h1>
    </>);
}

export default UseMemo;