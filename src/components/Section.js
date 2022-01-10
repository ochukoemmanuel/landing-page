import React from 'react';
import Tab from '../images/illustration-features-tab-2.png';

const Section = () => {
  return (
    <section className='relative'>
      <div className='bg-bookmark-white py-20 mt-20 lg:mt-60'>
        <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
          <h1 className='text-3xl text-center text-bookmark-blue'>
            Intelligent search
          </h1>
          <p className='text-center text-bookmark-grey mt-4'>
            Our powerful search feature will help you find saved sites in no
            time at all. No need to crawl through all of your bookmarks.
          </p>
        </div>

        <div className='mt-20 lg:mt-54'>
          <div className='container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24'>
            <div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
              <img
                className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full'
                src={Tab}
                alt=''
              />
            </div>
            <div className='flex flex-1 flex-col items-center lg:items-start'>
              <h1 className='text-3xl text-bookmark-blue'>
                Intelligent search
              </h1>
              <p className='text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to crawl through all of your bookmarks.
              </p>
              <button
                type='button'
                class='btn btn-purple hover:bg-white hover:text-black'
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 lg:-bottom-11 lg:right-0'></div>
    </section>
  );
};

export default Section;
