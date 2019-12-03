import React from "react";
import { BrowserRouter } from "react-router-dom";
import MyNavbar from './MyNavbar';



export default class App extends React.Component {
     constructor(props) {
          super(props);
     }

     render() {
          return (
               <BrowserRouter>
                    <MyNavbar />
               </BrowserRouter>
          );
     }
}
