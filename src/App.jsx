import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Countdown from "./components/Countdown";
import Story from "./components/Story";
import Schedule from "./components/Schedule";
import Venue from "./components/Venue";
import Directions from "./components/Directions";
import Gift from "./components/Gift";
import FAQ from "./components/FAQ";
import GuestBook from "./components/GuestBook";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Countdown />
      <Story />
      <Schedule />
      <Venue />
      <Directions />
      <Gift />
      <FAQ />
      <GuestBook />
      <Gallery />
      <RSVP />
      <Footer />
    </>
  );
}

export default App;