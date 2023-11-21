import React from 'react'

function DevicesTable({data}:{data:any}) {
  return (
   <table className=' w-[100%] text-white mt-[6%]'>
  <tr>
    <th className='w-[20%]'>No</th>
    <th className='w-[20%]'>Dispenser No</th>
    <th className='w-[20%]'>Nozzle No</th>
    <th className='w-[20%]'>Fuel Type</th>
    <th className='w-[20%]'>Brand Type</th>
  </tr>
  {
  data.map((e:any,index:any)=>(
  <tr key={`kdkd_${index}`}>
    <th className='w-[20%]'>{index}</th>
    <th className='w-[20%]'>{e.dep_no}</th>
    <th className='w-[20%]'>{e.nozzle_no}</th>
    <th className='w-[20%]'>{e.fuel_type}</th>
    <th className='w-[20%]'>{e.dep_type}</th>
  </tr>
  )
  )      
  }
</table>
  )
}

export default DevicesTable