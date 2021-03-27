import Layout from '../../components/Layout';
import tw from 'twin.macro';

const LandingContainer = tw.div`min-height[85vh] relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 p-10 gap-y-4 z-0 bg-white dark:bg-primary`;
const image = tw`w-full h-full rounded-lg`;

function index({ data }) {
  return (
    <Layout>
      <LandingContainer>
        {data.results.map((res, index) => (
          <div
            tw="w-56 h-80 bg-primary rounded-lg flex flex-col shadow-menuMobile hover:(transform scale-110) cursor-pointer p-5 dark:bg-white"
            key={index}
          >
            <div tw="font-ubuntu text-white text-center text-lg dark:text-primary">
              {res.original_title || res.title || res.orignal_name || res.name}
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original${res?.backdrop_path}`}
              css={image}
              alt="poster"
            />
          </div>
        ))}
      </LandingContainer>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://api.themoviedb.org/3/discover/tv?api_key=67eebe9dafb47ac0207ea37e6ba3ccb3&languange=en-US'
  );
  const data = await res.json();
  return { props: { data } };
}

export default index;
