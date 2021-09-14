import React  from "react";

import Header from '../src/Components/Header.js'
import Main from '../src/Components/Main.js'
import Footer from '../src/Components/Footer.js'


class App extends React.Component{

  render(){

    return (
      <div>
    <Header/>
    <Main/>
    <Footer/> 
      </div>
    );

  }
}
export default App;