import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ODOT extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpen.odot,
      modalClick: this.props.modalClick
    }

  }

  static getDerivedStateFromProps = (props, state) => {

    if (props.isOpen.odot !== state.isOpen.odot) {
      return { isOpen: props.isOpen.odot };
    }

    return null;

  }

  render = () => {

    const { isOpen, modalClick } = this.state;

    return (
      <Modal show={ isOpen } onHide={ modalClick }>
        <Modal.Header closeButton>
          <Modal.Title>Blockchain Implementation</Modal.Title>
        </Modal.Header>
        <Modal.Body>ODOT</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={ modalClick }>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }

}

export default ODOT;