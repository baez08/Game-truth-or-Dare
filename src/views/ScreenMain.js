import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import AddPlayer from '../components/app/AddPlayer';
import { PlayerContext } from '../player/PlayerContext';

const ScreenMain = () => {

    const {player} = useContext(PlayerContext);

    return (
        <div className="main__content text-white d-flex flex-column justify-content-around align-items-center mt-5">
            <div className="main__title">
                <span>
                    Game Truth or Dare
                </span>
            </div>

            <div className="main__form-player">
                <AddPlayer/>
            </div>

            {
                player.length >= 2 ?
                (
                    <Link to="/player" className="btn btn-primary">
                        Play <FontAwesomeIcon icon={faPlayCircle} />
                    </Link>
                ) : null
            }
        </div>
    )
}

export default ScreenMain;
