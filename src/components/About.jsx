import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[280px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[2px] rounded-[25px] shadow-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black bg-opacity-90 backdrop-blur-sm rounded-[23px] py-8 px-12 min-h-[320px] flex justify-evenly items-center flex-col relative overflow-hidden group hover:bg-opacity-80 transition-all duration-300'
      >
        {/* Cool background effect */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        
        {/* Animated background dots */}
        <div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500'>
          <div className='absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse'></div>
          <div className='absolute top-8 right-6 w-1 h-1 bg-pink-400 rounded-full animate-ping'></div>
          <div className='absolute bottom-6 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-300'></div>
          <div className='absolute bottom-4 right-4 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-700'></div>
        </div>
        
        <div className='relative z-10 flex flex-col items-center'>
          <div className='p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform duration-300'>
            <img
              src={icon}
              alt='service-icon'
              className='w-20 h-20 object-contain filter drop-shadow-lg'
            />
          </div>

          <h3 className='text-white text-[22px] font-semibold text-center leading-relaxed tracking-wide'>
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Home = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-8 text-white text-[20px] max-w-4xl leading-[36px] font-light tracking-wide'
      >
        <span className='text-[24px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 block mb-4'>
          WylerChain is a Layer 3 blockchain built on Arbitrum Orbit, designed for the next generation of users who expect Web3 to feel like Web2.
        </span>
        
        <span className='block mb-4 text-gray-300'>
          With WylerChain, anyone can log in using their Google account, instantly receive a smart wallet, and start sending tokens with zero gas fees.
        </span>
        
        <span className='block mb-4 text-gray-300'>
          We combine account abstraction (ERC-4337), social login, and paymaster infrastructure to remove the traditional pain points of crypto—no wallet extensions, no seed phrases, no confusing gas settings.
        </span>
        
        <span className='text-[22px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
          Whether you're onboarding your friends or building for the next billion users, WylerChain is the easiest way to experience crypto.
        </span>
        <div>
          <button
            type='button'
            onClick={() => window.open('https://wylerchains-organization.gitbook.io/whitepaper', '_blank', 'noopener,noreferrer')}
            className='hover:bg-indigo-500 bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-12'
          >
            Wylerchain Whitepaper
          </button>

        </div>
      </motion.p>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Home, "overview");
