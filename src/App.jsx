import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
    </div>
  );
}

export default App;
