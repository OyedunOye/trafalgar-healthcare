import './App.css';

import { Navbar, Introduction, AboutUs, MobileApp, Services,Publications, Testimonials, Footer } from './components';

const App = () => (
    <main className="trafalgar_app">
      <Navbar />
      <Introduction />
      <Services />
      <AboutUs />
      <MobileApp />
      <Testimonials />
      <Publications />
      <Footer />
    </main>
  );

  export default App;