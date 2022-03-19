import Image from 'next/image';

export default function About() {
  return (
    <div
      className=' bg-slate-600 h-screen flex flex-col justify-start items-center w-full px-8 md:px-12 mb-14 lg:mb-20'
      id='about'
    >
      <div className='flex flex-row items-start w-full justify-between'>
        <div>
          <p className='text-4xl m-0 leading-normal font-light text-left mr-8 text-white mt-20'>
            About the Pitchathon
          </p>
          <p className='text-white font-extralight w-3/5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <Image src='/teamwork.svg' alt='teamwork' height={700} width={500} />
        </div>
      </div>
    </div>
  );
}
