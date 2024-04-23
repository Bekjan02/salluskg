import './App.scss';
import {
  AboutUs,
  Benefits,
  Header,
  Hero,
  Services,
  ConsultationCTA,
  Builders,
  Applications,
  Contacts,
  Footer,
  SuccessfulModal,
} from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="section">
          <div className="container">
            <AboutUs />
            <Services />
            <Benefits />
          </div>
        </div>
        <ConsultationCTA />
        <div className="section">
          <div className="container">
            <Builders />
            <Applications />
            <Contacts />
          </div>
        </div>
      </main>
      <Footer />
      <SuccessfulModal />
    </>
  );
}

export default App;
