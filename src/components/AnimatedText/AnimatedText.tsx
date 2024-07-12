import { motion } from 'framer-motion';
import { Typography } from 'antd';
import { defaultAnimation } from '../../constants';

export const AnimatedText = ({ text }: { text: string }) => (
  <motion.div
    initial='hidden'
    animate='visible'
    transition={{ staggerChildren: 0.1 }}
  >
    <Typography.Title style={{ marginBottom: 0, fontWeight: 'normal' }}>
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={defaultAnimation}>
          {char}
        </motion.span>
      ))}
    </Typography.Title>
  </motion.div>
);
