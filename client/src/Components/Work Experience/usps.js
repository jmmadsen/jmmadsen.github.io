import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class USPS extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpen.usps,
      modalClick: this.props.modalClick
    }

  }

  static getDerivedStateFromProps = (props, state) => {

    if (props.isOpen.usps !== state.isOpen.usps) {
      return { isOpen: props.isOpen.usps };
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
        <Modal.Body>USPS</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={ modalClick }>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }

}

export default USPS;