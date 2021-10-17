import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { ListGroup } from 'react-bootstrap';
import { PlayerContext } from '../../player/PlayerContext';
import { types } from '../../types/types';

const ListPlayer = () => {

    const {player, dispatch} = useContext(PlayerContext);

    const deletePlayer = (e) => {
        dispatch({
            type: types.deletePlayer,
            payload: e.currentTarget.id
        });
    }

    return (
        <>
            {
                player.length < 1 ?
                (
                    <h3 className="text-center mt-3">
                        Para poder iniciar el juego debe añadir 2 jugadores o más
                    </h3>
                ) :
                (
                    <>
                        {
                            player.length <= 1 ?
                            (
                                <h3 className="text-center mt-3">
                                    Para poder iniciar el juego debe añadir 2 jugadores o más
                                </h3>
                            ) : null
                        }
                        <ListGroup variant="flush">
                            {
                                player.map( (player, i) => {
                                    return (<ListGroup.Item key={player.id} className="d-flex justify-content-between align-items-center">
                                                <span>{`${i + 1}. ${player.option}`}</span>

                                                <div className="main__opciones-player d-flex justify-content-between">
                                                    {/* <FontAwesomeIcon icon={faPencilAlt}/> */}
                                                    <span className="pointer" id={player.id} onClick={deletePlayer}><FontAwesomeIcon icon={faTrash} /></span>
                                                </div>
                                            </ListGroup.Item>)
                                })
                            }
                        </ListGroup>
                    </>
                )
            }
        </>
    )
}

export default ListPlayer;
