import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import PerformanceMetrics from './components/PerformanceMetrics';
import GitHubStats from './components/GitHubStats';
import OptimizedThreeBackground from './components/OptimizedThreeBackground';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen font-['Inter'] relative overflow-x-hidden transition-colors duration-300 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">
      {/* Optimized Three.js Background */}
      <OptimizedThreeBackground />
      
      {/* Additional subtle CSS effects */}
      <div className="fixed inset-0 opacity-10 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Advanced UI Components */}
      <ScrollProgress />
      
      {/* Main Content - ensure higher z-index */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <PerformanceMetrics />
        <About />
        <GitHubStats />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;