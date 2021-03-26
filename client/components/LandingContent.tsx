import tw from 'twin.macro';
import { motion } from 'framer-motion';

const LandingText = tw`font-logoFont text-primary text-center text-8xl md:text-9xl cursor-pointer dark:text-white`;
const LandingContainer = tw.div`height[85vh] relative z-10 flex flex-col justify-center overflow-hidden`;

function LandingContent() {
  return (
    <LandingContainer>
      <motion.div css={LandingText} drag={true} whileDrag={{ scale: 1.1 }}>
        Frickster
      </motion.div>
    </LandingContainer>
  );
}

export default LandingContent;
