import { useCallback, useState,useEffect ,useRef} from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("")

  const passwordRef=useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx"
    if (numberallowed)
      str = str + "0123456789"
    if (charallowed)
      str = str + "@!#$%^&*()"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length, numberallowed, charallowed, setpassword])
  
  useEffect(()=>{passwordgenerator()},[length,numberallowed,charallowed,passwordgenerator])

  
  const copytoclipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])


  return (
    <>
      <div className='w-full  h-screen bg-black'>
        <div className='mx-auto w-full  max-w-lg bg-gray-500 h-auto fixed justify-center text-black px-20 my-8 outline-none rounded-2xl top-[40%] left-[35%] p-3'>
          <h1 className='text-center text-white font-bold '>Password Generator</h1>
          <div className='p-1 m-1 rounded-xl text-orange'>
            <input className='rounded-lg px-1' type="text"
              value={password}
              placeholder='password'
              ref={passwordRef} />
            <button className='bg-blue-400 w-auto h-auto justify-center px-4 rounded-md m-1'
            onClick={copytoclipboard}
           >copy</button>
          </div>
          <div className='flex justify-center text-center'> 
          <input className='cursor-pointer' type="range"
          min={6}
          max={100}
          value={length} 
          onChange={(e)=>{setlength(e.target.value)}}/>
          <label className=' text-center px-2 font-bold'>Length:{length}</label>
          <input type="checkbox" 
          defaultChecked={numberallowed}
          id="numberInput" 
          onChange={()=>{
            setnumberallowed((prev)=>!prev);
          }}
          ></input>
          <label className='px-1 font-bold'>Numbers</label>
          <input type="checkbox" 
          defaultChecked={charallowed}
          id="characterInput" 
          onChange={()=>{
            setcharallowed((prev)=>!prev);
          }}
          ></input>
          <label className='px-1 font-bold'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
