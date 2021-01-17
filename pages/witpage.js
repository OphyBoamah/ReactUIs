import React from 'react';

const witpage = () => {
  return (
    <header className='bg-gray-700 text-white font-bold h-screen overflow-hidden'>
      <nav className='flex items-center justify-between h-24 px-20'>
        <div>stural</div>
        <div className='flex flex-none ml-30'>
          <p className='font-normal text-sm px-10'>Search</p>
          <p className='font-normal text-sm px-10'>Sell</p>
          <p className='font-normal text-sm px-10'>Renting</p>
          <p className='font-normal text-sm px-10'>Financing</p>
        </div>
        <button className='bg-white text-black py-2 px-3 text-sm'>
          Place an Ad
        </button>
      </nav>
      <div className='flex justify-between'>
        <div className='w-1/2 pl-40 py-20'>
          <h1 className='font-bold text-5xl text-green-100'>
            We make complex <br />
            decisions simple.
          </h1>
          <p className='text-xl font-normal py-10'>
            Stural is a digital property management platform designed <br />
            primarily for Lorem ipsum dolor sit amet consectetur, adipisicing
            elit.{' '}
          </p>
          <div className='bg-white py-4 text-black flex '>
            <svg
              className='w-6 mx-3'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
            <input type='text' placeholder='Where do you want to move?' />
            <button className='ml-40 bg-gray-800 text-white text-sm py-3 px-8'>
              Search
            </button>
          </div>
          <div className='flex items-center pt-10'>
            <p>Explore All Categories</p>
            <svg
              className='w-4 ml-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          </div>
        </div>
        <div className='w-1/2 pl-20'>
          <img
            src='/images/witphoto.jpg'
            className='w-1/3 h-full absolute right-0 object-cover'
          />
        </div>
      </div>
    </header>
  );
};

export default witpage;
