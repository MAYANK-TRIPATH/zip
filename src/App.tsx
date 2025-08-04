import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="flex flex-col items-center h-screen pt-24">
      <ThemeToggle />
      <h1 className='text-5xl font-bold' style={{ color: 'var(--heading-color)' }}>
        Frequently asked questions
      </h1>

    </div>
  );
}

export default App;
