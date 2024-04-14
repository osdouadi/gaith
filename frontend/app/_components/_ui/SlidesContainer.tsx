"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeroImage from "/public/images/img-hero.jpeg";
import HeroImage2 from "/public/images/img-01.jpg";

const images = [HeroImage, HeroImage2];

function SlidesContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="banner-container w-full sm:w-[80%] lg:flex-1 xl:flex-1 h-[250px] md:lg-[350px] lg:h-[350px] xl:h-[350px] mt-4 lg:mt-0">
      <div className="intro-image h-full w-full relative">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`hero-image-${index}`}
            width={300}
            height={400}
            quality={95}
            className={`object-fill w-full h-full absolute rounded-[1rem] ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default SlidesContainer;
