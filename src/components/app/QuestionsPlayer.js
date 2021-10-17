import React, {useState} from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { truth } from '../../data/truth';
import { dare } from '../../data/dare';

const QuestionsPlayer = ({show, setShow, player}) => {

    const [cargando, setCargando] = useState(false);
    const [pregunta, setPregunta] = useState("");
    const [numberQuestion, setNumberQuestion] = useState(0);

    const handleQuestion = (question) => {
        setCargando(true);
        
        setTimeout(() => {
            setCargando(false);
            setPregunta(question);

            if (pregunta === "truth") {
                setNumberQuestion(
                    Math.floor( (Math.floor( Math.random() * truth.length)) - 1)
                );

            } else {
                setNumberQuestion(
                    Math.floor( (Math.floor( Math.random() * dare.length)) - 1)
                );
            }
        }, 2000);
    }


    return (
        <>
            <Modal className="" show={show} centered >
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>¿Choose {player} truth or dare?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center align-items-center">
                        {
                            !cargando ?
                            (
                               <>
                                    {
                                        pregunta === "" ?
                                            (
                                                <div className="animate__animated animate__zoomIn">
                                                    <Button variant="primary" className="me-2" onClick={ () => handleQuestion("truth")}>
                                                        Truth
                                                    </Button>

                                                    <Button variant="primary" className="me-2" onClick={ () => handleQuestion("dare")}>
                                                        Dare
                                                    </Button>
                                                </div>
                                            ) : 
                                            (
                                                <div className="d-flex flex-column align-items-center animate__animated animate__zoomIn">
                                                    {
                                                        pregunta === "truth" ?
                                                        (
                                                            <span className="player__pregunta animate__animated animate__zoomIn">{truth[numberQuestion].question}</span>
                                                        ) :
                                                        (
                                                            <span className="player__pregunta animate__animated animate__zoomIn">{dare[numberQuestion].question}</span>
                                                        )
                                                    }

                                                    <Button variant="primary" className="me-2 mt-3 animate__animated animate__zoomIn" onClick={() => {setShow(false); setPregunta("");}}>
                                                        Done
                                                    </Button>
                                                </div>
                                            )
                                    }
                               </>
                            ) : 
                            (
                                <div className="animate__animated animate__zoomIn">
                                    <Spinner animation="border" variant="light" />
                                </div>
                            )
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default QuestionsPlayer;
