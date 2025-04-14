import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
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
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        WylerChain is a Layer 3 blockchain built on Arbitrum Orbit, designed for the next generation of users who expect Web3 to feel like Web2.

        With WylerChain, anyone can log in using their Google account, instantly receive a smart wallet, and start sending tokens with zero gas fees.

        We combine account abstraction (ERC-4337), social login, and paymaster infrastructure to remove the traditional pain points of crypto—no wallet extensions, no seed phrases, no confusing gas settings.

        Whether you’re onboarding your friends or building for the next billion users, WylerChain is the easiest way to experience crypto.
        <div>
          <button
            type='button'
            onClick={() => window.open('https://wylerchain.gitbook.io/whitepaper', '_blank', 'noopener,noreferrer')}
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
