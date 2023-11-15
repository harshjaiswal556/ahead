'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <TypingText title="Built out of frustration" />
    <TitleText title={<>Meet the ahead app</>} />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          <div className="mt-[8px] md:text-[24px] text-[24px] text-white">
            A personalized pocket coach that provides bite- sized, science-driven tools to boost emotional
            intelligence.
          </div>
          <div className="mt-[8px] md:text-[24px] text-[24px] text-white">

            Think of it as a pocket cheerleader towards a better, more fulfilling.
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
