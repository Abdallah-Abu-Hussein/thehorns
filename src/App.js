import React  from "react";

import Header from '../src/Components/Header.js'
import Main from '../src/Components/Main.js'
import Footer from '../src/Components/Footer.js'
import HornedBeasts from "../src/Components/HornedBeast.js";


class App extends React.Component{

  render(){

    return (
      <div>
    <Header/>
    <Main/>
    <HornedBeasts/>
    <Footer/> 
    {/* <h1>I'm suffering </h1> */}
      </div>
    );

  }
}
export default App;