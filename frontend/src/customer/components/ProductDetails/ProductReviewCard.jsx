import React from 'react';
import { Grid, Box, Rating } from '@mui/material';

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        {/* Avatar */}
        <Grid item xs={1}>
          <Box
            sx={{
              width: 56,
              height: 56,
              bgcolor: '#9155fd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            R
          </Box>
        </Grid>

        {/* Review Content */}
        <Grid item xs={9}>
          <div className="space-y-2 flex items-center justify-content">
            <div>
              <p className="font-semibold text-lg ">Raam</p>
              <p className="opacity-70">April 5, 2023</p>
              </div>
              </div>
         <div className= "flex flex-col items-start justify-content">
            <Rating  className="flex items-center justify-content" value={4.5} name="half-rating" readOnly br />
            <p>Excellent</p>
            </div>
           
      
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
