import React, { useContext, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ListPlayer from './ListPlayer';
import { PlayerContext } from '../../player/PlayerContext';
import { types } from '../../types/types';
import { v4 as uuidv4 } from 'uuid';

const AddPlayer = () => {

    const {dispatch} = useContext(PlayerContext)


    const [namePlayer, setNamePlayer] = useState("");

    const handleInputChange = (e) => {
        setNamePlayer(
            e.target.value
        );
    }

    const addNewPlayer = () => {
        dispatch({
            type: types.addPlayer,
            payload: {
                id: uuidv4(),
                option: namePlayer
            }
        });
        setNamePlayer("");
    }

    
    return (
        <>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col sm="12" md="8" className="">
                        <Form.Control type="text" placeholder="Player name" value={namePlayer} onChange={handleInputChange}/>
                    </Col>
                    <Col sm="12" md="4" className="p-0 d-flex justify-content-center">
                        <Button variant="primary" className="" type="button" onClick={addNewPlayer}>
                            Add <FontAwesomeIcon icon={faUserPlus} />
                        </Button>
                    </Col>
                </Form.Group>
            </Form>

            <div className="main__content-list-player container">
                <ListPlayer/>
            </div>
        </>
    )
}

export default AddPlayer;
