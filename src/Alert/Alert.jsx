import React from 'react';
import { Modal, Row, Container, Button } from 'react-bootstrap';

function Alert(props) {
    return (
        <Modal show={props.show} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton onClick={props.onHide}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1>{props.data.title}</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        {props.data.msg}
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="btn btn-secondary">Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Alert;