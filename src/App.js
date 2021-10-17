import React, { useEffect, useReducer } from 'react';
import AppRouter from './routers/AppRouter';
import { PlayerContext } from './player/PlayerContext';
import { playerReducer } from './player/playerReducer';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'animate.css';
import './styles/styles.scss';


const init = () => {
  return JSON.parse(localStorage.getItem('player')) || [];
}

const App = () => {

  const [player, dispatch] = useReducer(playerReducer, [], init);

  useEffect(() => {
    localStorage.setItem( 'player', JSON.stringify(player) );
  }, [player])


  return (
    <PlayerContext.Provider value={{
      player,
      dispatch
    }}>
      <AppRouter/>
    </PlayerContext.Provider>
  )
}

export default App;
