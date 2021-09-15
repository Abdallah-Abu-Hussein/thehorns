import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                    <Modal.Header id="modalHeader" closeButton >
                        <Modal.Title>{this.props.beast.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modalBody">
                        <Card id="modalCard" style={{ width: '100%' }}>
                            <Card.Img id="modalImg" variant="top" src={this.props.beast.image_url} alt={this.props.title} title={this.props.title} style={{ width: '100%' }} />
                            
                            <Card.Body id="modalCardBody">

                                <Card.Title>
                                    Beast Name: <span>{this.props.beast.title} 🤩</span>
                                </Card.Title>

                                <Card.Text>
                                    Discription: {this.props.beast.description} 📝
                                </Card.Text>

                                <Card.Text>
                                    Key Word: {this.props.beast.keyword} 
                                </Card.Text>

                                <Card.Text>
                                    Horns: {this.props.beast.horns} 🦄
                                </Card.Text>

                                  <Card.Text>
                                    Votes: {this.props.beast.votes} ❤️
                                  </Card.Text>

                            </Card.Body>
                        </Card>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default SelectedBeast;