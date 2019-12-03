import React from 'react';
import { Container } from 'reactstrap';
import Fade from 'react-reveal/Fade';


export default class Home extends React.Component {
     constructor(props) {
          super(props);
     }

     render() {
          return (
               <Container>
                    <Fade duration={4000}>
                         This is HOME.  
                    </Fade>
               </Container>
          );
     }
}
