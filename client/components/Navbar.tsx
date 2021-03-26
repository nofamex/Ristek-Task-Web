import Head from 'next/head';
import { useState } from 'react';
import Switch from './Switch';
import Button from './Button';
import { FaQuinscape } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import tw from 'twin.macro';

const Nav = tw.div`h-auto flex w-full sticky top-0 p-3 dark:bg-primary z-10 bg-white`;
const LogoContainer = tw.div`flex items-center justify-center cursor-pointer`;
const LogoText = tw.h1`font-logoFont text-3xl text-primary ml-3 dark:text-white`;
const MenuContainer = tw.div`flex-grow`;
const ListContainer = tw.div`hidden md:flex h-full items-center justify-start space-x-10 ml-10`;
const ButtonContainer = tw.div`hidden md:flex w-28 justify-end items-center cursor-pointer`;
const SwitchContainer = tw.div`w-48 flex items-center justify-end`;
const LongMenuButtonContainer = tw.div`flex w-full p-4 cursor-pointer`;
const ButtonLogoOut = tw.div`w-9 h-9 rounded-full bg-white flex justify-center items-center cursor-pointer dark:bg-primary`;
const ButtonLogoIn = tw.div`w-7 h-7 rounded-full bg-primary cursor-pointer dark:bg-white`;

const RoundedMenu = tw`w-14 h-14 rounded-full bg-primary absolute bottom-6 flex justify-center items-center right-6 fixed md:hidden z-20 dark:(bg-white shadow-menuMobile)`;
const LongMenuBot = tw`w-36 h-64 pb-5 bg-white shadow-menuMobile dark:bg-primary flex-col justify-center items-center md:hidden absolute fixed right-6 bottom-24 rounded-md`;
const LongMenuContainer = tw`flex flex-col w-full h-4/5 justify-center items-center`;
const LongMenuList = tw`h-auto w-full flex items-center justify-center text-primary cursor-pointer font-ubuntu font-semibold dark:text-white mt-5`;
const ListMenu = tw`h-full flex items-center justify-center w-auto text-primary cursor-pointer font-ubuntu font-semibold dark:text-white`;

const navContainer = {
  visible: {
    opacity: 1,
    transition: {
      x: { velocity: 100 },
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      x: { velocity: 100 },
      duration: 0.3,
    },
  },
};

const navList = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  tap: {
    scale: 0.9,
  },
  hover: {
    scale: 1.1,
  },
};

const navItemVariants = {
  tap: {
    scale: 0.9,
  },
  hover: {
    scale: 1.1,
  },
};

const menus = ['Browse', 'Blogs', 'Bookmarks', 'Like'];

export function Navbar() {
  const [isOn, setIsOn] = useState(false);
  const { theme, setTheme } = useTheme();

  const switchHandler = () => {
    setIsOn(!isOn);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav>
        <LogoContainer>
          <IconContext.Provider value={{ color: isOn ? 'white' : '#43379d', size: '2.5em' }}>
            <FaQuinscape />
          </IconContext.Provider>
          <LogoText>Frickster</LogoText>
        </LogoContainer>
        <MenuContainer>
          <ListContainer>
            {menus.map((menu, index) => (
              <motion.div
                key={index}
                css={ListMenu}
                variants={navItemVariants}
                whileTap="tap"
                whileHover="hover"
              >
                {menu}
              </motion.div>
            ))}
          </ListContainer>
        </MenuContainer>
        <SwitchContainer>
          <Switch isOn={isOn} onClick={switchHandler} />
        </SwitchContainer>
        <ButtonContainer>
          <Button text="Login" />
        </ButtonContainer>
      </Nav>
    </>
  );
}

export function NavbarMobile() {
  const [isToggled, setIsToggled] = useState(false);
  const clickHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <motion.div
        css={RoundedMenu}
        variants={navItemVariants}
        whileTap="tap"
        whileHover="hover"
        onClick={clickHandler}
      >
        <ButtonLogoOut>{isToggled && <ButtonLogoIn />}</ButtonLogoOut>
      </motion.div>
      {isToggled && (
        <AnimatePresence>
          <motion.div
            css={LongMenuBot}
            initial="hidden"
            animate={isToggled ? 'visible' : 'hidden'}
            exit="hidden"
            variants={navContainer}
          >
            <motion.div
              css={LongMenuContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navList}
            >
              {menus.map((menu, index) => (
                <motion.div
                  css={LongMenuList}
                  variants={navItem}
                  key={index}
                  whileTap="tap"
                  whileHover="hover"
                >
                  <p>{menu}</p>
                </motion.div>
              ))}
            </motion.div>
            <LongMenuButtonContainer>
              <Button text="Login" css={tw`w-full`} />
            </LongMenuButtonContainer>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
