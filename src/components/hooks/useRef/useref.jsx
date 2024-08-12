import { useRef, useState } from "react";

const Useref = () => {
    const [userName, setUserName] = useState("");
    const inputRef = useRef();
    console.log(inputRef?.current?.value ?? '');
    return (
        <>
            <h1 className="text-base" >Use Ref</h1>
            <input
                ref={inputRef}
                value={userName}
                onChange={e => setUserName(e.target.value)}
                placeholder="Enter your Name.."
                className="border border-gray-300 p-2 rounded"
            />
            <h2 className="text-base">{`My Name is : ${userName}`}</h2>
        </>
    );
}

export default Useref;
