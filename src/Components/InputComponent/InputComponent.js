import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDataRedux } from '../../features/boolean/dataSlice'

function InputComponent() {


  const [data, setData] = useState("")

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setData(e.target.value)
  }

  const handleData = ()=>{
    if(data.trim()){
      dispatch(setDataRedux(data))
      setData("")
    }
  }

  return (
    <div className='bg-[#1679AB] gap-4 flex justify-center items-center h-[100px]'>
        <input type="text" value={data}  onChange={handleInputChange} placeholder="Add Todo" className="w-[40%] h-10 px-5 rounded-md"/>
        <button onClick={handleData} className='bg-[#219C90] px-10 h-10 rounded-md text-white'>Send</button>
    </div>
  )
}

export default InputComponent