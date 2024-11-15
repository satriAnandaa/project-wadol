import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { motion } from 'framer-motion';
import Title from '../Title/Title';
import { monthData } from '../../constans';

const CustomBarChart = ({ variants }) => {
  return (
    <motion.div variants={variants} className='h-[450px] w-full rounded-xl bg-white p-5 pb-20 dark:bg-slate-600 dark:text-slate-300 xl:flex-1'>
      <Title>Analisis Pengunjung Dolphin Tour</Title>

      <ResponsiveContainer>
        <BarChart data={monthData}>
          <XAxis />
          <YAxis />
          <Tooltip />
          <Bar dataKey="asing" fill='#12aacc' />
          <Bar dataKey="lokal" fill='#0e7187' />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default CustomBarChart;

