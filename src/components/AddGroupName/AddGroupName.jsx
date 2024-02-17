import React,{useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {addGrp} from '../../features/listname/listnameSlice'
import BgColorRadioBtn from '../BgColorRadioBtn/BgColorRadioBtn'
function AddGroupName({onClose}) {
  const [input,setInput] = useState("")
    const dispatch = useDispatch()
    const Myref = useRef()
const closePopup = (e)=>{
 if (Myref.current === e.target) {
   onClose()
  
}
    }
     const addName=(e)=> {
    e.preventDefault()
    dispatch(addGrp(input))
    // setInput("")
    
    
  }
  return (
    <div ref={Myref} onClick={closePopup} className='fixed left-96 top-44 inset-0 w-2/4 h-3/4 py-4 px-3 font-semibold'>
      
    <form className=' w-10/12 px-2 py-5 flex-wrap justify-between bg-green-300 flex flex-col content-center columns-2 gap-2 ' >
      <h2 className='  text-2xl'>Create new group</h2>
      <label className=' flex gap-4'>
      Group Name:<input type="text" value={input} onChange={(e)=> setInput(e.target.value)} name="" id="" className=' text-left text-black w-4/5 text-xl rounded-full border-r-gray-200 pl-6 ' placeholder='Enter Group Name' />
      </label>
      
            
      <label className=' flex gap-4'>Choose color : <BgColorRadioBtn /></label>
      <button type="submit" onClick={addName} className=' w-20 px-2 py-1 bg-[#001F8B] text-xl ml-4 text-white font-medium' >Create</button>
    </form>
    </div>
  )
}

export default AddGroupName
