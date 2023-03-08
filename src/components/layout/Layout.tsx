import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <main>
      <Header />

      {props.children}

      <Footer />
    </main>
  );
};

export default Layout;
