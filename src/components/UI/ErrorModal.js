import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import Card from './Card';
import './ErrorModal.css';

const Backdrop = props => {
    return <div className='backdrop' onClick={props.onClose}></div>;
};

const ModalOverlay = props => {
    return (
        <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.msg}</p>
            </div>
            <footer className="actions">
                <Button onClick={props.onClose}>Close</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} msg={props.msg} onClose={props.onClose} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
};

export default ErrorModal;