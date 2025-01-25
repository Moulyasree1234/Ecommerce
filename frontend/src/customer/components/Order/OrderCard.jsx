import React from 'react'
import { Grid } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();

  return (
    <div onClick={()=>navigate('/account/order/${5}')} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
         <Grid container spacing={2} sx={{justifyContent:"space-between"}} >
            <Grid item xs={6}>
                <div className='flex cursor-pointer mt-5'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://trendia.co/cdn/shop/files/WHOLEFABVAISNAVI_2.png?v=1714998774" alt=""/>
                    <div className='ml-5 space-y-2'>
                        <p className=''>women Kurta</p>
                        <p className='opacity-50 text-xs font-semibold'>Size:M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color:Pink</p>

                    </div>

                </div>
            </Grid>
            <Grid item xs={2} mt={5}>
                <p>₹1398</p> 
            </Grid>
            <Grid item xs={4} mt={5}>
                
                  {true && <div>
                    <p> 
                    <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                     <span>
                        Delivered On March 08
                    </span>
                </p>
                <p>
                    Your Item Has Been Delivered
                </p>
                    </div>}
               {false && <p>
                    <span>
                    Expected Delivery On March 08 
                    </span>
                </p>}
            </Grid>

         </Grid>
    </div>
  )
}

export default OrderCard
