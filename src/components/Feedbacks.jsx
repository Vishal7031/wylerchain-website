import React from "react";
import { motion } from "framer-motion";
import { node2 } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";


const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[500px] w-full'
  >
    {/* <p className='text-white font-black text-[48px]'>"</p> */}

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            {/* <span className='blue-text-gradient'>@</span> {name} */}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {/* {designation} of {company} */}
          </p>
        </div>

        <img
        // src={image}
        // alt={`feedback_by-${name}`}
        // className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`-mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`rounded-2xl sm:px-16 px-6 sm:py-10 py-6 min-h-[270px]`}
      >
        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>What others say</p> */}
          <h2 className={styles.sectionHeadText}>Wyler Sequencer</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex-row flex gap-7`}>
        {/* {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))} */}

        <div className='w-1/2'>
          <p>
            <span className="font-bold">
              Become a core part of WylerChain by owning a Sequencer Slot.</span>
            <br></br>
            <br></br>
            Sequencers are key to processing and ordering transactions on WylerChain. As a slot holder, you’ll earn $WYLER rewards, help secure the network, and play a vital role in its performance.
            Built on Arbitrum Orbit, WylerChain offers high scalability with Ethereum-grade security.
            <br></br>
            <br></br>

            <span className="font-bold">
            Limited slots. Long-term value.</span>
            <br></br>

            Slot sales launching soon. Early access = early rewards.
          </p>
          <div>
            <button
              type='submit'
              className='hover:bg-indigo-500 bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-12'
            >
              Reserve Your Slot
            </button>
          </div>

        </div>
        <div className='w-1/2 h-[400px]'> <img src={node2} alt="node2" className='w-full h-75 rounded-2xl'
        /></div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "nodes");
