import Image from 'next/image';
import { motion } from 'framer-motion';
import NavBar from './navbar';

export default function Landing() {
  return (
    <div className='w-full h-screen'>
      <NavBar />
      <div className='flex flex-col items-center justify-around sm:justify-center px-8 sm:flex-row sm:px-5 w-full h-screen'>
        <div className='flex mt-20 mb-10 sm:m-0 sm:mr-24'>
          <motion.div
            animate={{
              y: ['2%', '-2%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              repeatType: 'reverse',
            }}
          >
            <Image src='/rocket.svg' alt='Computer' height={700} width={500} />
          </motion.div>
        </div>
        <div className='flex flex-col justify-center sm:m-0 items-start sm:h-full'>
          <h1 className='text-7xl sm:text-5xl m-0 leading-normal sm:leading-normal font-montserrat'>
            CSB Pitchathon
          </h1>
          <p className='text-2xl sm:text-2.5xl font-montserrat text-gray-300'>
            April 23-24
          </p>
        </div>
      </div>
    </div>
  );
}
