import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { originals,actions, romance, horror } from "./url";
import './App.css';


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url = {originals} title = {'Netflix Originals'} />
      <RowPost url = {actions} title = {'Action'} isSmall />
      <RowPost url = {romance} title = {'Romance'} />
      <RowPost url = {horror} title = {'Horror'} isSmall />

    </div>
  );
}

export default App;
