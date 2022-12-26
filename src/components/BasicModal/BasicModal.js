import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import BlogCreate from '~/pages/BlogCreate';

const BasicModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create New
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BlogCreate />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default BasicModal;
