import './App.scss';
import { Header, Hero } from './components';

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-slate-700">
        <Header />
        <main>
          <Hero />
        </main>
        <div className="section">
          <button className="btn-filled">Click me</button>
        </div>
      </div>
    </>
  );
}

export default App;
