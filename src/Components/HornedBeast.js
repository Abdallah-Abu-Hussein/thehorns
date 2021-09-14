import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component{
   constructor(props){
       super(props);
       this.state={
           numberOfLikes:0
       }
   }
   increaseNumOfLikes =()=>{
       this.setState({
        numberOfLikes : this.state.numberOfLikes +1
       })
   }
   render(){
       return(
        <Card style={{ width: '18rem',display: 'inline-flex',flex: 1}}>

        <Card.Img onClick={this.increaseNumOfLikes} variant="top" src={this.props.url} alt={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
       {this.props.pargraph}
          </Card.Text>
          <Card.Text>
              Num of likes : {this.state.numberOfLikes}
          </Card.Text>
        </Card.Body>
      </Card>
       )
   }
}

export default HornedBeast;