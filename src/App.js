import './App.css';

import { Navbar, Introduction, AboutUs, MobileApp, Services,Publications, Testimonials, Footer } from './components';

const App = () => (
    <div className="trafalgar_app">
      <Navbar />
      <Introduction />
      <Services />
      <AboutUs />
      <MobileApp />
      <Testimonials />
      <Publications />
      <Footer />
    </div>
  );

  export default App;