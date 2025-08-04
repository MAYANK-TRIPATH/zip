import { ThemeToggle } from './components/ThemeToggle';
import { FAQ } from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <ThemeToggle />
      <div className="flex flex-col items-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-0">
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 text-center' style={{ color: 'var(--heading-color)' }}>
          Frequently asked questions
        </h1>
        <FAQ />
      </div>
    </div>
  );
}

export default App;
