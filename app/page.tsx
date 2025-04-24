import About from '@/components/About/About';
import Advantages from '@/components/Advantages/Advantages';
import Header from '@/components/Header/Header';
import LastWorks from '@/components/LastWorks/LastWorks';
import Layout from '@/components/Layout/Layout';
import Promo from '@/components/Promo/Promo';
import Sprite from '@/components/Sprite/Sprite';

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
        </main>
        {/* Footer */}
      </Layout>
    </>
  );
}
