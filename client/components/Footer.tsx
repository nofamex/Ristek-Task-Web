import tw from 'twin.macro';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Foot = tw.div`w-full h-auto bg-purple-200 dark:bg-primary flex flex-col  p-3 z-10 relative bottom-0`;
const LogoContainer = tw.div`flex justify-center h-8`;
const LogoWrapper = tw.div`w-24 flex justify-center items-center cursor-pointer`;
const CopyrightWrapper = tw.div`flex justify-center font-ubuntu mt-2 text-primary text-xs opacity-70 dark:text-white`;

const IconStyle = tw`text-primary w-full h-full opacity-70 hover:opacity-100 dark:text-white`;

const GithubLink = 'https://github.com/nofamex';
const LinkedInLink = 'https://www.linkedin.com/in/nofaldi-atmam-b34851196/';

function Footer() {
  const router = useRouter();
  return (
    <Foot>
      <LogoContainer>
        <LogoWrapper>
          <FaGithub css={IconStyle} onClick={() => router.push(GithubLink)} />
        </LogoWrapper>

        <LogoWrapper>
          <FaLinkedin css={IconStyle} onClick={() => router.push(LinkedInLink)} />
        </LogoWrapper>

        <LogoWrapper>
          <AiFillMail css={IconStyle} />
        </LogoWrapper>
      </LogoContainer>
      <CopyrightWrapper>Copyright: @nofamex</CopyrightWrapper>
    </Foot>
  );
}

export default Footer;
