import React  from "react";
import Header from '../src/Components/Header.js'
import Main from '../src/Components/Main.js'
import Footer from '../src/Components/Footer.js'
import Horned from '../src/Components/Horned.json'
import SelectedBeast from "./Components/SelectedBeast.js";
import MyForm from "./Components/MyForm.js"
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      beasts: Horned,
      clickedBeast: {},
      horns:'',
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


 hornFilter = (value) => this.setState({ horns: Number(value)});

  filteredBeasts = () => {
    let newBeasts = Horned.filter( beast => beast.horns === this.state.horns );
    this.setState({
      beasts: newBeasts
    });
  }
  

  render() {
    return (
      <div>
        <Header />
        <MyForm hornFilter={this.hornFilter} filteredBeasts={this.filteredBeasts} />
        <SelectedBeast showModal={this.state.showModal} closeModal={this.closeModal} 
        beast={this.state.clickedBeast} />
        <Main beastData={this.state.beasts} showModal={this.showModal} />
        <Footer />
      </div>
    )
  }
}
export default App;