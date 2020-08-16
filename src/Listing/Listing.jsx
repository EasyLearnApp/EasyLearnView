import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

import './styles.css';

function Listing(props) {
    return (
        <Modal show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.info.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table className="table table-hover table-striped">
                    <thead className="thead-light">
                        <tr>
                            {
                                (props.info.header).map((header, value) => {
                                    return (<th key={value} scope="col">{header}</th>)
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (props.info.data).map((info, key) => {
                                return (<tr key={key}>{info.map((data, kkey) => { return (<td key={kkey}>{data}</td>) })}</tr>)
                            })
                        }
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Listing;