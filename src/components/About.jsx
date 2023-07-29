import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          Line Number 1 <br></br>
          Line Number 2 <br></br>
          Line Number 3 <br></br>
          Line Number 1 <br></br><br></br><br></br>
      </motion.p>
      
      {/* TODO: needs a download picture */}
      <button 
      // className="live-demo flex justify-between 
      //         sm:text-[18px] text-[14px] text-timberWolf 
      //         font-bold font-beckman items-center py-5 pl-3 pr-3 
      //         whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
      //         w-[125px] h-[46px] rounded-[10px] bg-jetLight 
      //         sm:mt-[22px] mt-[16px] hover:bg-battleGray 
      //         hover:text-eerieBlack transition duration-[0.2s] 
      //         ease-in-out"
              className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[30px] text-[45px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[250px] h-[120px] rounded-[10px] bg-jetLight 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
              onClick={() =>
                window.open(
                  'resume link', //paste the link to your resume here
                  '_blank'
                )
              }
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download);
              }}>
          Resume
          
           {/* <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              /> */}
      </button>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
