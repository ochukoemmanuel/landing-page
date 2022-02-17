import React from 'react';
import album1 from '../images/album1.jpeg';
import album2 from '../images/album2.jpg';
import album3 from '../images/album3.jfif';
import album4 from '../images/album4.jpg';
import album5 from '../images/album5.jpg';
import './Albums.module.css';
import Slider from 'react-slick';
import RightArrow from './RightArrow';

const Albums = () => {
  const settings = {
    dots: !true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    // prevArrow: <L_arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: 'linear',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 5000,
          cssEase: 'linear',
        },
      },
    ],
  };

  const images = [
    { album: album1, title: 'The Gospel of The Kingdom', desc: 'Album' },
    { album: album2, title: 'Hallelujah Again', desc: 'Album' },
    { album: album5, title: 'Man Of Galilee', desc: 'Album' },
    { album: album3, title: 'Greatest Lord', desc: 'Album' },
    { album: album4, title: 'Too Faithful', desc: 'Album' },
    { album: album5, title: 'Man Of Galilee', desc: 'Album' },
  ];

  return (
    <div className='relative container py-9 mt-6 lg:mt-9 px-5 lg:px-0'>
      <div className='sm:w-3/4 lg:w-5/12 text-left'>
        <h1 className='text-3xl font-bold text-blog-black'>Albums & Eps</h1>
      </div>

      <div className='relative mt-11 lg:mt-12'>
        <div className='relative flex flex-1 justify-center gap-x-4'>
          <Slider className='slide z-0' {...settings}>
            {images.map((img, i) => (
              <div
                key={i}
                className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full cursor-pointer -ml-6'
              >
                <img
                  key={i}
                  className='img md:w-52 mx-6'
                  src={img.album}
                  alt=''
                />
                <div className='mt-4 font-medium text-base md:text-lg mx-6'>
                  {img.title}
                </div>
                <p className='text-bookmark-grey mx-6'>{img.desc}</p>
              </div>
            ))}
          </Slider>
          {/* <div className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full overflow-hidden cursor-pointer'>
            <img className='w-full' src={album2} alt='' />
            <div className='mt-4 font-medium text-lg'>Hallelujah Again</div>
            <p className='text-bookmark-grey mt-2'>Album</p>
          </div>
          <div className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full overflow-hidden cursor-pointer'>
            <img className='w-full' src={album3} alt='' />
            <div className='mt-4 font-medium text-lg'>Greatest Lord</div>
            <p className='text-bookmark-grey mt-2'>Album</p>
          </div>
          <div className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full overflow-hidden cursor-pointer'>
            <img className='w-full' src={album4} alt='' />
            <div className='mt-4 font-medium text-lg'>Too Faithful</div>
            <p className='text-bookmark-grey mt-2'>Album</p>
          </div>
          <div className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full overflow-hidden cursor-pointer'>
            <img className='w-full' src={album5} alt='' />
            <div className='mt-4 font-medium text-lg'>Man Of Galilee</div>
            <p className='text-bookmark-grey mt-2'>Album</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Albums;
