import { motion } from 'framer-motion';
import tw from 'twin.macro';

const ButtonStyle = tw`flex justify-center items-center bg-primary text-white font-ubuntu font-semibold w-20 rounded-lg h-9 dark:(bg-white text-primary)`;

const navItemVariants = {
  tap: {
    scale: 0.9,
  },
  hover: {
    scale: 1.1,
  },
};

function Button({ text, ...props }) {
  return (
    <motion.div
      css={ButtonStyle}
      variants={navItemVariants}
      whileTap="tap"
      whileHover="hover"
      {...props}
    >
      {text}
    </motion.div>
  );
}

export default Button;
