import React, { useEffect, useState } from 'react'
import Listitem from '../ListItem/Listitem'
import AddGroupName from '../AddGroupName/AddGroupName'
import {useSelector} from 'react-redux'
import { Plus  } from 'lucide-react';



function Navbar() {
  const groupNames = useSelector(state => state.grpName.grpName)
  const [showForm, setShowForm] = useState(false)
  

  
 
  return (
    <div className=' w-[361px] bg-white'>
      <h1 className=' font-medium text-4xl'>Pocket Notes</h1>

      <ul className=' m-4 mb-4 p-4 bg-red-800'>

        {groupNames.map((grp)=>
          <Listitem key={grp.id} text={grp.text}  />
        )}
               
      </ul>
      <button onClick={()=> setShowForm(true)} className='fixed left-72 bottom-9
       flex items-center justify-center rounded-full h-14 w-14 bg-blue-400 ' ><Plus/></button>
      {showForm && <AddGroupName onClose={()=>setShowForm(false)}/>}
      
    </div>
  )
}

export default Navbar