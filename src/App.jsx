import './App.scss';
import {
  AboutUs,
  Benefits,
  Header,
  Hero,
  Services,
  ConsultationCTA,
  Builders,
} from './components';

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-slate-700">
        <Header />
        <main>
          <Hero />
          <div className="section">
            <AboutUs />
            <Services />
            <Benefits />
          </div>
          <ConsultationCTA />
          <div className="section">
            <Builders />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
