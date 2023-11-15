'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="/logo.png"
        alt="logo"
        className="w-12 h-12 rounded-xl"
      />
      <h2 className="text-[14px] leading-[30.24px] text-black">
        Emotions
      </h2>
      <h2 className="text-[14px] leading-[30.24px] text-black">
        Manifesto
      </h2>
      <h2 className="text-[14px] leading-[30.24px] text-black">
        Self-awareness test
      </h2>
      <h2 className="text-[14px] leading-[30.24px] text-black">
        Work with us
      </h2>
      {/* <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      /> */}
      <div className='p-6 py-3 font-normal text-white bg-black rounded-full'>
        Download App
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
