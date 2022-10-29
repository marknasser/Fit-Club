import "./App.css";

import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import WhyUs from "./components/why-us/WhyUs";
import Plans from "./components/plans/Plans";
import Testimonials from "./components/testimonials/Testimonials";
import Join from "./components/join/Join";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <WhyUs />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
