import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const ImageModal = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      scrollable
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title
          className="text-centered"
          id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          style={{ width: '100%', objectFit: 'contain' }}
          src={props.imgsrc}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
