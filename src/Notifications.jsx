import React from 'react';
import { Container } from 'reactstrap';
import Fade from 'react-reveal/Fade';


export default class Notifications extends React.Component {
     constructor(props) {
          super(props);
     }

     render() {
          return (
               <Container>
                    <Fade duration={2000}>
                         This is NOTIFICATIONS.
                    </Fade>
               </Container>
          );
     }
}