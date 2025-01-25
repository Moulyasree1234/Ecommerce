import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from '@mui/material/Button';

const HomeSectionCarousel = ({ data = [], section }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1240: { items: 5.5 },
  };

  if (!data.length) {
    return <div>No items available in this section</div>;
  }

  const items = data.slice(0, 10).map((item, index) => (
    <div key={index}>
      <HomeSectionCard product={item} />
    </div>
  ));

  const slidePrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const slideNext = () =>
    setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="border">
      {section && <h2 className="text-xl font-bold mb-4">{section}</h2>}
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {items.length > 5 && (
          <>
            <Button
              variant="contained"
              className="z-50 bg-white"
              onClick={slidePrev}
              sx={{
                position: 'absolute',
                top: '8rem',
                left: '-3.5rem',
                transform: 'translateX(50%) rotate(90deg)',
                bgcolor: 'white',
              }}
              aria-label="prev"
            >
              <KeyboardArrowLeftIcon
                sx={{ transform: 'rotate(-90deg)', color: 'black' }}
              />
            </Button>
            <Button
              variant="contained"
              className="z-50 bg-white"
              onClick={slideNext}
              sx={{
                position: 'absolute',
                top: '8rem',
                right: '0rem',
                transform: 'translateX(50%) rotate(90deg)',
                bgcolor: 'white',
              }}
              aria-label="next"
            >
              <KeyboardArrowLeftIcon
                sx={{ transform: 'rotate(90deg)', color: 'black' }}
              />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
