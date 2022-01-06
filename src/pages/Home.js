import React from 'react';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      <div className='h-screen bg-theme'>
        <div
          className='grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 
                  md:border-0 border-white transform rotate-12 md:rotate-0 mx-10 z-10 bg-theme'
        >
          <div className='h-1/2'>
            <lottie-player
              src='https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className='font-bold text-white px-5'>
            <h1 className='md:text-4xl text-7xl'>
              Hii, I am <b className='text-yellow-500'>Abhishek</b>
            </h1>
            <h1 className='text-3xl'>
              Frontend Engineer{'  '}
              <b className='text-yellow-500'>Design Developer & Deploy</b>
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
