import { useState } from "react";

import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/sections/home/Home";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 bg-grid-pattern text-white">
          <div
            className={`min-h-screen transition-opacity duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } text-gray-100`}
          >
            <Navbar />
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
