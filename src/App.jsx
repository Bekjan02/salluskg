import './App.scss';
import { AboutUs, Header, Hero } from './components';

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-slate-700">
        <Header />
        <main>
          <Hero />
          <div className="section">
            <AboutUs />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
