import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component{
   constructor(props){
       super(props);
       this.state={
           numberOflikes:0
       }
   }
   increseNoflikes =()=>{
       this.setState({
        numberOflikes : this.state.numberOflikes +1
       })
   }
   render(){
       return(
        <Card style={{ width: '18rem',display: 'inline-flex',flex: 1}}>
            
        <Card.Img onClick={this.increseNoflikes} variant="top" src={this.props.url} alt={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
       {this.props.pargraph}
          </Card.Text>
          <Card.Text>
              Num of likes : {this.state.numberOflikes}
          </Card.Text>
        </Card.Body>
      </Card>
       )
   }
}

export default HornedBeast;