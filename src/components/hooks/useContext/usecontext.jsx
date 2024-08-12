import { createContext, useState } from "react";
import User from "./User"
import Card from "./Card"

export const UserContext = createContext(null);
const Usecontext = () => {
    const [userName, setUserName] = useState('Amar');
    return (
        <UserContext.Provider value={{ userName }}>
            <h1 className={"text-base"}>Use Context</h1>
            <User>
                <Card />
            </User>
        </UserContext.Provider>
    );
}

export default Usecontext;
