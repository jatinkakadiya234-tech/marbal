import React from 'react';
import LuxuryCarousel from '../Helper/LuxuryCarousel';
import { luxuryCarouselData } from '../../data/carouselData';

const CarouselDemo = () => {
  return (
    <div className="w-full">
      <LuxuryCarousel slides={luxuryCarouselData} />
    </div>
  );
};

export default CarouselDemo;