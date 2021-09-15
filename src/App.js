import React  from "react";
import Header from '../src/Components/Header.js'
import Main from '../src/Components/Main.js'
import Footer from '../src/Components/Footer.js'
import Horned from '../src/Components/Horned.json'
import SelectedBeast from "./Components/SelectedBeast.js";


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      beasts: Horned,
      clickedBeast: {}
    };
  }
  showModal = (key) => {
    this.setState({
      showModal: true,
      clickedBeast: this.state.beasts[key]
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SelectedBeast showModal={this.state.showModal} closeModal={this.closeModal} beast={this.state.clickedBeast} />
        <Main beastData={this.state.beasts} showModal={this.showModal} />
        <Footer />
      </div>
    )
  }
}
export default App;