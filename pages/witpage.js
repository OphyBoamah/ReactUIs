import React from 'react';

const witpage = () => {
  return (
    <div className='bg-indigo-800 pt-10 font-bold'>
      <div className='flex  align-baseline '>
        <div className='flex-1 ml-20 '>stural</div>
        <div className='flex flex-none ml-30'>
          <h4 className='flex-1 ml-10'>Search</h4>
          <h4 className='flex-1 ml-10'>Sell</h4>
          <h4 className='flex-1 ml-10'>Renting</h4>
          <h4 className='flex-1 ml-10'>Financing</h4>
        </div>
        <div className='flex-1 ml-96 px-10 py-2 t'>Place an Ad</div>
      </div>
      <div>
        <h1 className='font-bold text-6xl mb-10 text-center'>
          We make complex <br />
          decisions simple
        </h1>
        <p className='text-xl '>
          Stural is a digital property management platform designed primarily
          for <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.{' '}
        </p>
      </div>
    </div>
  );
};

export default witpage;
