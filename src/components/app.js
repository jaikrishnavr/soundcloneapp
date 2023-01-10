import React, { useState } from "react";
import "../styles/app.css";
import Cards from "./Cards/Cards";

import Header from "./Header/Header";
import Loading from "./Loading/Loading";
import Player from "./Player/Player";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      <Header />

      {loading ? <Loading /> : <Cards />}

      <Player />
    </>
  );
}

export default App;
