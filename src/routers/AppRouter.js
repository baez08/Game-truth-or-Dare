import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from '../components/layout/Footer';
import ScreenMain from '../views/ScreenMain';
import ScreenPlayer from '../views/ScreenPlayer';

const AppRouter = () => {
    return (
        <>
            <div className="app__content d-flex justify-content-between">
                <div className="app__content-img d-none d-md-flex align-items-center animate__animated animate__fadeInDown">
                    <img src="./assets/truth-logo.jpeg" className="" alt="logo truth" />
                </div>

                <div className="app__main animate__animated animate__zoomIn">
                    <Router>
                        <Switch>
                        <Route exact path="/player" component={ScreenPlayer} />
                            <Route exact path="/" component={ScreenMain} />
                        </Switch>
                    </Router>
                </div>

                <div className="app__content-img d-none d-md-flex align-items-center animate__animated animate__fadeInUp">
                    <img src="./assets/dare-logo.jpeg" className="" alt="logo dare" />
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default AppRouter;
