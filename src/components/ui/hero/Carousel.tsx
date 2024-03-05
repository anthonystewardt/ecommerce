'use client';

import { Carousel } from 'flowbite-react';
import image1 from "../../../../public/imgs/hero/asanchezy.png";
import image2 from "../../../../public/imgs/hero/cyberyura.png";
import image3 from "../../../../public/imgs/hero/cyberyura2.jpg";



const heroList = [
  {
    image: image3,
    title: "Andres Sanchez",
    subtitle: "Full Stack Developer"
  },
  {
    image: image3,
    title: "Cyber Yura",
    subtitle: "Full Stack Developer"
  }
]


export function CarouselHero() {
  return (
    <div className="xl:px-16 rounded-lg ">
      <div className="md:h-[300px] h-[200px] xl:h-[400px]  ">
        <Carousel
          className='w-full h-full xl:h-full'
        >
          {heroList.map((hero, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="object-cover w-full aspect-auto"
              src={hero.image.src}
              alt="..."
              key={index}
            />
            ))
          }
        </Carousel>
      </div>
    </div>
  );
}