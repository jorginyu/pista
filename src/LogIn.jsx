import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { Redirect } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const API_REGISTER = 'http://localhost:8080/register';
const API_LOGIN = 'http://localhost:8080/login';

export default class LogIn extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               nombre: '',
               email: '',
               password: '',
               checkPassword: '',
               check: '',
               createdAt: '',
               session: '',
               return: false
          };
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleInputChange = this.handleInputChange.bind(this);
          this.newDateAt = this.newDateAt.bind(this);
          this.check = this.check.bind(this);
     }

     newDateAt() {
          const day = new Date().getDate(),
               month = new Date().getMonth(),
               year = new Date().getUTCFullYear();
          const newDate = `${day}/${month}/${year}`;
          this.setState({
               createdAt: newDate
          });
     }

     handleInputChange(event) {
          const target = event.target;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          const name = target.name;

          this.setState({
               [name]: value
          });
     }

     check() {
          if (this.state.password === this.state.checkPassword && this.state.password !== '') {
               this.setState({
                    check: 'is-valid'      
               });
               this.newDateAt();
          } else if (this.state.password !== this.state.checkPassword || this.state.password === '') {
               this.setState({
                    check: 'is-invalid'
               });
          }
     }

     handleSubmit(e) {
          e.preventDefault();
          if (this.state.password === this.state.checkPassword) {
               const newUser = {
                    nombre: this.state.nombre,
                    email: this.state.email,
                    password: this.state.password,
                    checkPassword: this.state.checkPassword,
                    createdAt: this.state.createdAt
               };
               fetch(API_REGISTER, {
                    method: 'POST',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(newUser)
               })
               .then(user => {
                    user.json();
                    this.setState({
                         return: true,
                         session: user
                    });
               }).catch(err => console.log(err));
               console.log(this.state.session);
          } else {
               console.log('Contraseña no coincide');
          }
     }

     render() {
          if(this.state.return === true) {
               return <Redirect to="/" props={this.state.session} />
          }
          return (
               <Container>
                    <Fade duration={2000}>
                         <fieldset className="mt-5 field7">
                              <Row>
                                   <Col className="mt-3" md>
                                        <Form>
                                             <h4 id="iniciar-sesion" className="title">Iniciar sesión</h4>
                                             <FormGroup>
                                                  <Label for="login-email">Email</Label>
                                                  <Input
                                                       autoComplete="email"
                                                       type="email"
                                                       name="email"
                                                       id="login-email"
                                                       placeholder="pista@pista.com"
                                                  />
                                             </FormGroup>
                                             <FormGroup>
                                                  <Label for="login-pwd">Contraseña</Label>
                                                  <Input
                                                       autoComplete="false"
                                                       type="password"
                                                       name="passwd"
                                                       id="login-pwd"
                                                       placeholder="Contraseña"
                                                  />
                                             </FormGroup>
                                             <Button type="submit" color="danger" block outline>Iniciar sesión</Button>
                                        </Form>
                                   </Col>
                                   <Col className="mt-3" md>
                                        <Form onSubmit={this.handleSubmit}>
                                             <h4 id="registrarse" className="title">Registrarse</h4>
                                             <FormGroup>
                                                  <Label for="exampleEmail">Nombre de usuario</Label>
                                                  <Input
                                                       autoComplete="nombre"
                                                       value={this.state.nombre}
                                                       onChange={this.handleInputChange}
                                                       type="text"
                                                       name="nombre"
                                                       id="nombre"
                                                       placeholder="Daft Punk"
                                                  />
                                             </FormGroup>
                                             <FormGroup>
                                                  <Label for="exampleEmail">Email</Label>
                                                  <Input
                                                       autoComplete="email"
                                                       value={this.state.email}
                                                       onChange={this.handleInputChange}
                                                       type="email"
                                                       name="email"
                                                       id="reg-email"
                                                       placeholder="pista@pista.com"
                                                  />
                                             </FormGroup>
                                             <FormGroup>
                                                  <Label for="reg-pwd">Contraseña</Label>
                                                  <Input
                                                       autoComplete="false"
                                                       onBlur={this.check}
                                                       className={this.state.check}
                                                       value={this.state.password}
                                                       onChange={this.handleInputChange}
                                                       type="password"
                                                       name="password"
                                                       id="reg-pwd"
                                                       placeholder="Contraseña"
                                                  />
                                             </FormGroup>
                                             <FormGroup>
                                                  <Label for="reg-check-pwd">Confirmar contraseña</Label>
                                                  <Input
                                                       autoComplete="false"
                                                       onBlur={this.check}
                                                       className={this.state.check}
                                                       value={this.state.checkPassword}
                                                       onChange={this.handleInputChange}
                                                       type="password"
                                                       name="checkPassword"
                                                       id="reg-check-pwd"
                                                       placeholder="Confirmar contraseña"
                                                  />
                                             </FormGroup>
                                             <Button type="submit" color="warning" block outline>Registrarse</Button>
                                        </Form>
                                   </Col>
                              </Row>
                         </fieldset>
                    </Fade>
               </Container>
          );
     }
}
