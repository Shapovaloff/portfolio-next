import About from '@/components/About/About';
import Advantages from '@/components/Advantages/Advantages';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import LastWorks from '@/components/LastWorks/LastWorks';
import Layout from '@/components/Layout/Layout';
import Promo from '@/components/Promo/Promo';
import Sprite from '@/components/Sprite/Sprite';
import Technologies from '@/components/Technologies/Technologies';

export default function Home() {
  return (
    <>
      <Sprite />
      <Layout>
        <Header />
        <main>
          <Promo />
          <Advantages />
          <About />
          <LastWorks />
          <Technologies />
        </main>
        <Footer />
      </Layout>
    </>
  );
}
