import Image from 'next/image';
import React from 'react';

const offerData = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/da0d2neas/image/upload/v1707078267/offer2.png",
    url: "",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/da0d2neas/image/upload/v1707078267/offer1.png",
    url: "",
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/da0d2neas/image/upload/v1707078608/offer3.png",
    url: "",
  },
];


const OfferGrid = () => {
  return (
    <div className='grid grid-cols-12 gap-10 xl:px-20 '>
      {
        offerData.map(offer => (
          <div key={offer.id} className='col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4'>
            <Image 
              src={offer.image}
              alt="offer"
              width={500}
              height={500}
              className='rounded-lg w-full'
            />
          </div>
        ))
      }
    </div>
  );
}

export default OfferGrid;
