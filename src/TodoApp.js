import React, { useState } from "react";
import Axios from "axios";

import "./index.css";

import Search from "./components/Search";

function App() {
  const apiurl = "http://www.omdbapi.com/?apikey=52f32dce";

  const [state, setState] = useState({
    val: "",
    result: [],
    selected: {}
  });

  const handleEnter = e => {
    e.preventDefault();
    Axios(apiurl + "&s=" + state.val).then(({ data }) => {
      let result = data.Search;
      setState(prevState => {
        return { ...prevState, result };
      });
      console.log(e);
    });
  };

  const handleInput = e => {
    let val = e.target.value;

    setState(prevState => {
      return { ...prevState, val };
    });
  };
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} handleEnter={handleEnter} />
      </main>
    </div>
  );
}

export default App;
