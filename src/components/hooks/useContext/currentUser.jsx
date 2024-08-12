import {useContext} from 'react';
import { UserContext } from './usecontext';
const CurrentUser = () => {
    const { userName } = useContext(UserContext);
    return (
        <div>
            {userName}
        </div>
    );
}

export default CurrentUser;
