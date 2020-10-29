import React from "react"
import MainHeader from "components/Headers/MainHeader"
import {
  Container,
  Row,
  Card,
  CardBody,
  CardImg,
  CardHeader,
  Button,
  Col,
  Form,
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap"
import { useState } from "react"
import validator from "validator"
import { Link } from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>
      <MainHeader
        title='Account Login'
        lead='Enter your ceredentials to log into your account'
      />
      <Container className='mt--8 pb-5'>
        <Row className='justify-content-center'>
          <Col sm={10} md={8} lg={6}>
            <Card className='card-profile'>
              <CardHeader className='text-center border-0 pt-8 pt-md-4 pb-5'>
                <div className='d-flex justify-content-center'>
                  <div className='card-profile-image'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        size={1}
                        className='rounded-circle'
                        src={require("assets/img/theme/team-4.jpg")}
                      />
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardBody className='pt-5'>
                <Form>
                  <Row className='offset-sm-0 offset-md-1'>
                    <Col md='10'>
                      <FormGroup>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-email-83' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className={
                              validator.isEmail(email)
                                ? "is-valid"
                                : "is-invalid"
                            }
                            placeholder='Enter a vaid Email Address'
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md='10'>
                      <FormGroup>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-lock-circle-open' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className={
                              password.length > 5 ? "is-valid" : "is-invalid"
                            }
                            placeholder='Enter your password'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Col className='offset-sm-0 offset-md-4 pb-3'>
                    <Button className='btn-icon' color='primary' type='button'>
                      <span className='btn-inner--icon mr-1'>
                        <i className='ni ni-button-power' />
                      </span>
                      <span className='btn-inner--text'>LogIn</span>
                    </Button>
                  </Col>
                </Form>
                <div className='text-center'>
                  <div className='h5 font-weight-300'>
                    <a href='#'> Forgot Password ?</a>
                  </div>
                  <div className='h5 font-weight-300'>
                    Don't have an account ?{" "}
                    <Link to='/register'> Register for an account</Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
