import { motion } from 'framer-motion';
import CardItem from './CardItem'
import { cardItems } from '../../constans'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
const Cards = () => {
  return (
    <motion.div className='translate-all flex flex-wrap gap-3 p-4 duration-300 sm:px-7' variants={containerVariants} initial="hidden" animate="show" >
      {cardItems.map((item, index) => (
        <CardItem item={item} key={index} variants={itemVariants} />
      ))}
    </motion.div>
  );
};

export default Cards;
