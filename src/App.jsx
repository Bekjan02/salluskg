import './App.scss';
import { AboutUs, Benefits, Header, Hero, Services } from './components';

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
        </main>
      </div>
    </>
  );
}

export default App;
