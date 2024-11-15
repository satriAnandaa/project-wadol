
import React from 'react'
import { motion } from 'framer-motion';
import Header from '../../komponen/Layout/Header';
import Cards from '../../komponen/Cards/Cards';
import CustomBarChart from '../../komponen/Charts/CustomBarChart';
import CustomePieChart from '../../komponen/Charts/CustomePieChart';
import Tabel from '../../komponen/Tabel/Tabel';
import Aktivitas from '../../komponen/Aktivitas/Aktivitas';
import ImageCarousel from '../../komponen/Charts/CarouselImage';


const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Dashboard = ({ isOpen, darkMode, toggleDarkMode }) => {
  return (
    <div className={`flex-1 bg-slate-200 ${isOpen ? "md:ml-44" : "ml-16"} transition-all duration-300 dark:bg-slate-800`}>


      <Cards />

      <motion.div className='translate-all flex flex-col gap-4 p-4 duration-300 sm:px-7 sm:py-1 xl:flex-row' variants={containerVariants} initial="hidden" animate="visible">
        <CustomBarChart variants={itemVariants} />

      </motion.div>

      <motion.div className='translate-all flex flex-col gap-4 p-4 duration-300 sm:px-7 sm:py-1 xl:flex-row' variants={containerVariants} initial="hidden" animate="visible">
        <Tabel variants={itemVariants} />
        <Aktivitas variants={itemVariants} />
      </motion.div>

      <div className='translate-all flex flex-col gap-4 p-4 duration-300 sm:px-7 sm:py-1 xl:flex-row'>
        <ImageCarousel variants={itemVariants} />
      </div>
    </div>
  );
};

export default Dashboard;



