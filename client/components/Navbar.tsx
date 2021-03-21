import Head from 'next/head';
import { useState } from 'react';
import Switch from './Switch';
import Button from './Button';
import { FaQuinscape } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import tw from 'twin.macro';

const Nav = tw.div`h-auto flex w-full sticky top-0 p-3 dark:bg-primary`;
const LogoContainer = tw.div`flex items-center justify-center cursor-pointer`;
const LogoText = tw.h1`font-logoFont text-3xl text-primary ml-3 dark:text-white`;
const MenuContainer = tw.div`flex-grow`;
const ListContainer = tw.div`flex h-full items-center justify-start space-x-10 ml-10`;
const ListMenu = tw`h-full flex items-center justify-center w-auto text-primary cursor-pointer font-ubuntu font-semibold dark:text-white`;
const ButtonContainer = tw.div`flex w-40 justify-end items-center cursor-pointer`;
const SwitchContainer = tw.div`w-48 flex items-center justify-end`;

const navItemVariants = {
  tap: {
    scale: 0.9,
  },
  hover: {
    scale: 1.1,
  },
};

const menus = ['Browse', 'Blogs', 'Bookmarks', 'Like'];

function Navbar() {
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

export default Navbar;
