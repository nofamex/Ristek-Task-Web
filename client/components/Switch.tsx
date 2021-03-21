import tw from 'twin.macro';
import { motion } from 'framer-motion';
import { FaMoon } from 'react-icons/fa';
import { HiSun } from 'react-icons/hi';
import { IconContext } from 'react-icons';

const rounded = tw`w-6 h-6 bg-primary dark:bg-white rounded-full flex justify-center items-center`;
const toggler = (isOn) => [
  tw`w-12 h-4 rounded-full flex cursor-pointer items-center`,
  isOn ? tw`justify-end bg-gray-300 transition-all` : tw`justify-start bg-gray-300 transition-all`,
];

function Switch({ isOn, ...props }) {
  return (
    <motion.div layout css={toggler(isOn)} {...props}>
      <motion.div layout css={rounded}>
        <IconContext.Provider value={{ color: isOn ? '#43379d' : 'white', size: '1.2em' }}>
          {isOn ? <FaMoon /> : <HiSun />}
        </IconContext.Provider>
      </motion.div>
    </motion.div>
  );
}

export default Switch;
