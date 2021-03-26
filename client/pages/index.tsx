import Layout from '../components/Layout';
import Particle from '../components/Particle';
import LandingContent from '../components/LandingContent';

function Home() {
  return (
    <>
      <Particle />
      <Layout>
        <LandingContent />
      </Layout>
    </>
  );
}

export default Home;
