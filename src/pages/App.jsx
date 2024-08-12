import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../router'
import '../App.css'
import UseMemo from '../components/hooks/useMemo/usememo'
import UseCallBack from '../components/hooks/useCallback/usecallback'
import Usecontext from '../components/hooks/useContext/usecontext'
import Useref from '../components/hooks/useRef/useref'
function App() {
  const navigate = useNavigate();
  const [count, setCounter] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
      <h1 className="text-2xl font-bold">
        Use State
      </h1>
      <p> Counter : {count}</p>
      <button onClick={() => setCounter((prev) => prev + 1)} className='bg-red-400 p-2 rounded mt-2'>
        Change state of number
      </button>
      <hr className='my-2' />
      <h1 className="text-2xl font-bold">
        Navigation to a new Page
      </h1>
      <button onClick={() => { navigate('/page') }} className='bg-red-400 p-2 rounded mt-2'>
        navigate
      </button>
      <hr className='my-2' />
      <UseMemo />
      <hr className='my-2' />
      <UseCallBack />
      <hr className='my-2' />
      <Usecontext />
      <hr className='my-2' />
      <Useref />
    </>
  )
}

export default App
