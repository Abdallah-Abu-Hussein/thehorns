import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }

  vote = () => {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  showModal = () => {
    this.props.showModal(this.props.beastkey);
  }


  render() {

    return (
      <div>

        <Card style={{ width: '18rem' }}>
          <Card.Img onClick={this.showModal} variant="top" src={this.props.beastImgSrc} alt={this.props.beastImgAlt} title={this.props.beastImgTitale} />
          <Card.Body>
            <Card.Title>
              {this.props.beastName} 
            </Card.Title>
            <Card.Text>
              Discription: {this.props.beastdisc} 
            </Card.Text>
            <Card.Text>
              Key Word: {this.props.beastKeyword} 
            </Card.Text>
            <Card.Text>
              Horns: {this.props.beastHorns} 🦄
            </Card.Text>
            <Card.Text>
              Votes: {this.state.votes} ❤️
            </Card.Text>
            <Button onClick={this.vote} variant="primary">vote</Button>
          </Card.Body>
        </Card>

      </div>
    )
  }
}
export default HornedBeast;