import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router';
const HeroSection = () => {

    const navigate = useNavigate();
  return (

<section className="bg-white dark:bg-gray-900 min-h-screen">
    <div className="grid max-w-screen-xl px-2 py-12 mx-auto lg:gap-12 xl:gap-16 lg:py-32 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-4xl mb-6 text-5xl font-extrabold tracking-tight leading-30 md:text-8xl xl:text-8xl dark:text-white">
                AI Tool for Teachers
            </h1>
            <p className="max-w-2xl mb-8 font-light text-gray-600 lg:mb-10 md:text-xl lg:text-2xl dark:text-gray-400">
                Towards AI for Education.
            </p>
            <button  
            onClick={() => navigate("/signup")}
            className="inline-flex items-center justify-center px-6 py-4 mr-4 text-lg font-semibold text-center text-white rounded-xl bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 hover:cursor-pointer">
                Get started
                <svg className="w-6 h-6 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </button>
            <a href="#" className="inline-flex items-center justify-center px-6 py-4 text-lg font-semibold text-center text-gray-900 border border-gray-300 rounded-xl hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Why us?
            </a>
        </div>
        
       {/* Enlarged DotLottie animation */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex w-fit lg:mr-2">
            <div className="w-full max-w-3xl xl:max-w-7xl">
                <DotLottieReact
                    src="https://lottie.host/4715fc8b-443b-450b-a4d2-7c9671f97237/JTANusIoFv.lottie"
                    loop
                    autoplay
                    // className='w-2xl'
                />
            </div>
        </div>
    </div>
</section>

  )
}

export default HeroSection
