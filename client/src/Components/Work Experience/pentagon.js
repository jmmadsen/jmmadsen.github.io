import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Pentagon extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpen.pentagon,
      modalClick: this.props.modalClick
    }

  }

  static getDerivedStateFromProps = (props, state) => {

    if (props.isOpen.pentagon !== state.isOpen.pentagon) {
      return { isOpen: props.isOpen.pentagon };
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
        <Modal.Body>Pentagon</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={ modalClick }>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }

}

export default Pentagon;