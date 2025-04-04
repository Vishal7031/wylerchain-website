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
          <h2 className={styles.sectionHeadText}>Wyler Nodes</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex-row flex gap-7`}>
        {/* {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))} */}
        
        <div className='w-1/2'>
          <p>
            <span className="font-bold">
              Become a Wyler Node Operator for WylerChain and Earn Network Rewards As a Wyler Node on WylerChain.
            </span>
            <br></br>
            <br></br>
            The Wyler Nodes on wyler Chain are essential for validating transactions and securing the network. This critical consensus mechanism upholds trust and security within the WylerChain ecosystem. Wyler Node operators will be rewarded in wyler for their work in validating transactions.
          </p>
          <div>
            <button
              type='submit'
              className='hover:bg-indigo-500 bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-12'
            >
              Mint Coming Soon
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
