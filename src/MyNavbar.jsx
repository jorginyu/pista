import React from 'react';
//router
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
//effects
import Fade from 'react-reveal/Fade';
//reactstrap
import { Container, Row, Col } from 'reactstrap';
//icons
import { GoHome } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi';
import { FaCarCrash } from 'react-icons/fa';
import { FaUserAstronaut } from 'react-icons/fa';
import { IoIosLogIn } from 'react-icons/io';
//components
import Home from './Home';
import Explore from './Explore';
import Notifications from './Notifications';
import Profile from './Profile';
import LogIn from './LogIn';


export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false
    };
  }

  render() {
    var showLogInAlert = {
      display: 'block'
    };
    if (this.state.online === false) {
      console.log('Log in');
    } else {
      showLogInAlert = {
        display: 'none'
      };
    }

    return (
      <div>
        <div style={showLogInAlert} >

          <Fade top>
            <div id="alert-session">
              <Container>
                <Link to="/login" id="logInBtn">Inicia sesión</Link> <IoIosLogIn />
              </Container>

            </div>

          </Fade>
        </div>
        <Fade bottom>
          <div id="navigation">
            <Container>
              <Row>
                <Col>
                  <Link to="/">
                    <GoHome className="navigationLink" />
                  </Link>
                </Col>
                <Col>
                  <Link to="/explore">
                    <FiSearch className="navigationLink" />
                  </Link>
                </Col>
                <Col>
                  <Link to="/notifications">
                    <FaCarCrash className="navigationLink" />
                  </Link>
                </Col>
                <Col>
                  <Link to="/profile">
                    <FaUserAstronaut className="navigationLink" />
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        </Fade>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={LogIn} />

        </Switch>


      </div>
    );
  }
}
