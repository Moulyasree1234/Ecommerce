import React from 'react'

const AddressCard = () => {
  return (
    <div>
        <div className='sapce-y-3 flex flex-col items-start' >
            <p className='font-semibold'>Moulyasree</p>
            <p>Anantapur,AndhraPradesh,515001</p>
            <div className='space-y-1 flex flex-col items-start'>
                <p className='font-semibold'>PhoneNumber</p>
                <p>9849585679</p>
            </div>
        </div>
    </div>
  )
}

export default AddressCard
