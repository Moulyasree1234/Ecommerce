import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTraker from './OrderTraker';
import { Grid, Box } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      {/* Delivery Address Section */}
      <div>
        <h1 className="font-semibold text-lg py-10">Delivery Address</h1>
        <AddressCard />
      </div>

      {/* Order Tracker */}
      <div className="py-20">
        <OrderTraker activeStep={2} />
      </div>

      {/* Product Cards */}
      <Grid container spacing={3} className="mt-5">
        {[1, 1, 1, 1].map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            className="shadow-xl rounded-md border"
            sx={{
              padding: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {/* Product Image and Details */}
            <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://trendia.co/cdn/shop/files/WHOLEFABVAISNAVI_2.png?v=1714998774"
                alt="Product"
              />
              <div className="ml-5 space-y-2">
                <p className="font-semibold">Women Kurta</p>
                <p className="opacity-50 text-xs font-semibold space-x-5">
                  <span>Color: pink</span> <span>Size: M</span>
                </p>
                <p>Seller: Lilla</p>
                <p className="font-bold">₹122</p>
              </div>
            </Grid>

            {/* Rate & Review Section */}
            <Grid item xs={4} sx={{ textAlign: 'right' }}>
              <Box sx={{ color: deepPurple[500], display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <StarBorderIcon sx={{ fontSize: '2rem' }} />
                <span className="ml-2 text-sm font-medium">Rate & Review product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
