import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
            // onClick={() => window.open(source_code_link, "_blank")}
            // className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
              // src={github}
              // alt='source code'
              // className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
            // key={`${name}-${tag.name}`}
            // className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="-mt-12">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Powered by $WYLER</h2>
        <span className="font-bold">
          $WYLER is the heart of the WylerChain ecosystem — it’s used to pay gas fees, take part in governance, and access core features across the network.
        </span>
        <br></br>
        <br></br>
        <span>
          The token will launch as an ERC-20 on Arbitrum One and Ethereum L1, giving it speed, security, and wide reach. Once WylerChain’s mainnet is live, $WYLER will be smoothly bridged for native use on the chain.
          <br></br>
          <br></br>
          From staking and governance to powering apps and rewarding users, everything in the WylerChain ecosystem runs on $WYLER.
        </span>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          <span className="font-bold">
            <br></br>
            PRODUCTS, PROGRAMS AND SOLUTIONS POWERED BY $WYLER
          </span>
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "products");
