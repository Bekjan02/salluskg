import './App.scss';
import { Header } from './components';

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-slate-700">
        <Header />
        <main>
          <section className="hero bg-hero h-screen"></section>
        </main>
        <div className="section">
          <button className="bg-button">Click me</button>
        </div>
      </div>
    </>
  );
}

export default App;
