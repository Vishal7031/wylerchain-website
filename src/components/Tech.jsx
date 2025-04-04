import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap gap-5'>
      {technologies.map((technology) => (
        <div className='w-16 h-16' key={technology.name}>
          <BallCanvas icon={technology.icon} url={technology.url}  />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
