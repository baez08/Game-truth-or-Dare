import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Wheel } from 'react-custom-roulette';
import QuestionsPlayer from '../components/app/QuestionsPlayer';
import { PlayerContext } from '../player/PlayerContext';

const ScreenPlayer = () => {

    const {player} = useContext(PlayerContext);

    const rondaPlayer = [...player];

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(true);
    }

    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * rondaPlayer.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
    };

    return (
        <div className="player__content text-white d-flex flex-column justify-content-around align-items-center animate__animated animate__zoomIn">

            <div className="player__title mt-3">
                <span>Players</span>
            </div>
           
                <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={rondaPlayer}
                        outerBorderColor={["#f2f2f2"]}
                        outerBorderWidth={[10]}
                        innerBorderColor={["#f2f2f2"]}
                        radiusLineColor={["#dedede"]}
                        radiusLineWidth={[10]}
                        textColors={["#ffffff"]}
                        fontSize={[25]}
                        backgroundColors={[
                            "#7829E7",
                            "#2A129A"
                        ]}
                        onStopSpinning={() => {
                            setMustSpin(false);
                            handleShow();
                        }}
                />

            <Button variant="primary" className="" type="button" onClick={handleSpinClick}>
                GO!
            </Button>

            <QuestionsPlayer 
                show={show}
                setShow={setShow}
                player={rondaPlayer[prizeNumber].option}
            />

        </div>
    )
}

export default ScreenPlayer;
