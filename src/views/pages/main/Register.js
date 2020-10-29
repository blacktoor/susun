import React from "react"
import MainHeader from "components/Headers/MainHeader"
import {
  Container,
  Row,
  Card,
  CardBody,
  CardImg,
  Alert,
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
import { useRef } from "react"

const Register = () => {
  const [name, setName] = useState({
    firstName: "",
    surname: "",
  })
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [occupation, setOccupation] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const [isOpen, setIsOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const onSubmit = (e) => {
    var tClass = false
    // CHECKING IF ALL FIELDS ARE IN THIER VALID STATES
    tClass = document.getElementsByClassName("is-invalid")
    console.log(tClass.length)
    e.preventDefault()
    if (tClass.length !== 0) {
      setIsOpen(true)
      setAlertMessage("All fields must be filled with the right information")
      setTimeout(() => {
        setIsOpen(false)
        setAlertMessage("")
      }, 3500)
    } else console.log("Wellcome")
  }
  return (
    <>
      <MainHeader
        title='Register for a Free Account'
        lead='Enter valid information only'
      />
      <Container className='mt--9' fluid>
        <Row className='justify-content-center'>
          <Col sm={10} md={8} lg={6}>
            <Card className='card-profile'>
              <CardHeader>
                <h3 className='text-center text-primary'>
                  Signup for a free Account
                </h3>
              </CardHeader>

              <CardBody className='justify-content-center'>
                <Form>
                  <Row className='form-row'>
                    <Col md={8}>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='firstName'
                        >
                          First name
                        </label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-single-02' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id='firstName'
                            className={
                              validator.isAlpha(name.firstName) &&
                              name.firstName.toString().length >= 3
                                ? "is-valid"
                                : "is-invalid"
                            }
                            placeholder='Firstname Here'
                            type='text'
                            onChange={(n) =>
                              setName({
                                firstName: n.target.value,
                                surname: name.surname,
                              })
                            }
                          />
                          <div className='invalid-feedback'>
                            Enter your real Firstname , not a nickname
                          </div>
                          <div className='valid-feedback'>
                            Your Firstname is {name.firstName}
                          </div>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md={8}>
                      <FormGroup>
                        <label className='form-control-label' htmlFor='surname'>
                          Surname
                        </label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-single-02' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id='surname'
                            className={
                              validator.isAlpha(name.surname) &&
                              name.surname.toString().length >= 3
                                ? "is-valid"
                                : "is-invalid"
                            }
                            placeholder='Surname here'
                            type='email'
                            value={name.surname}
                            onChange={(s) =>
                              setName({
                                firstName: name.firstName,
                                surname: s.target.value,
                              })
                            }
                          />
                          <div className='invalid-feedback'>
                            Enter your real Surname , not a nickname
                          </div>
                          <div className='valid-feedback'>
                            Your surname is {name.surname}
                          </div>
                        </InputGroup>
                      </FormGroup>
                    </Col>

                    <Col md={8}>
                      <FormGroup>
                        <label className='form-control-label' htmlFor='email'>
                          Email
                        </label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-email-83' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id='email'
                            className={
                              validator.isEmail(email)
                                ? "is-valid"
                                : "is-invalid"
                            }
                            placeholder='Enter a valid Email Address'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <div className='valid-feedback'>Email is valid</div>
                          <div className='invalid-feedback'>
                            Your Email is invalid . We need it to contact you
                          </div>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md={8}>
                      <FormGroup>
                        <label className='form-control-label' htmlFor='address'>
                          Address
                        </label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='fas fa-address-card' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id='address'
                            className={
                              validator.isAlpha(address) &&
                              address.toString().length >= 4
                                ? "is-valid"
                                : "is-invalid"
                            }
                            placeholder='Address here'
                            type='text'
                            value={address}
                            onChange={(s) => setAddress(s.target.value)}
                          />
                          <div className='invalid-feedback'>
                            Please enter an address
                          </div>
                          <div className='valid-feedback'>
                            You live at {address}
                          </div>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Alert color='danger' isOpen={isOpen}>
                      <i className='ni ni-air-baloon' />
                      {alertMessage}
                    </Alert>
                    <Col md={8}>
                      <FormGroup>
                        <label className='form-control-label' htmlFor='phone'>
                          Phone
                        </label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-single-02' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id='phone'
                            className={
                              validator.isMobilePhone(phone) &&
                              phone.toString().length === 10
                                ? "is-valid"
                                : "is-invalid"
                            }
                            placeholder='0244 444 444'
                            type='tel'
                            value={phone}
                            onChange={(s) => setPhone(s.target.value)}
                          />
                          <div className='valid-feedback'>
                            Good , your number is valid
                          </div>
                          <div className='invalid-feedback'>
                            Your number is invalid
                          </div>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md={8}>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='occupation'
                        >
                          Occupation
                        </label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-single-02' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id='occupation'
                            className={
                              validator.isAlpha(occupation) &&
                              occupation.length >= 4
                                ? "is-valid"
                                : "is-invalid"
                            }
                            placeholder='What do you do ?'
                            type='email'
                            value={occupation}
                            onChange={(s) => setOccupation(s.target.value)}
                          />
                          <div className='invalid-feedback'>
                            Enter your occupation
                          </div>
                          <div className='valid-feedback'>
                            Great , you are a {occupation}
                          </div>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md={8}>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='password'
                        >
                          Password
                        </label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-key-25' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id='password'
                            className={
                              validator.isAlphanumeric(password) &&
                              password.toString().length >= 6
                                ? "is-valid"
                                : "is-invalid"
                            }
                            placeholder='enter password?'
                            type='password'
                            value={password}
                            onChange={(s) => setPassword(s.target.value)}
                          />
                          <div className='valid-feedback'>Nicely done</div>
                          <div className='invalid-feedback'>
                            Password must be at least 6 characters
                          </div>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md={8}>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='password2'
                        >
                          Confirm Password
                        </label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-key-25' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id='password2'
                            className={
                              validator.isAlphanumeric(password2) &&
                              password === password2
                                ? "is-valid"
                                : "is-invalid"
                            }
                            placeholder='confirm password'
                            type='password'
                            value={password2}
                            onChange={(s) => setPassword2(s.target.value)}
                          />
                          <div className='invalid-feedback'>
                            Passwords do not match
                          </div>
                          <div className='valid-feedback'>
                            Great , your passwords match
                          </div>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Col className='offset-sm-0 offset-md-4 pb-3'>
                    <Button
                      className='btn-icon'
                      color='primary'
                      type='button'
                      onClick={onSubmit}
                    >
                      <span className='btn-inner--icon mr-1'>
                        <i className='ni ni-send' />
                      </span>
                      <span className='btn-inner--text'>Sign Up</span>
                    </Button>
                  </Col>
                </Form>
                <div className='text-center'>
                  <div className='h5 font-weight-300'>
                    <a href='#'> Forgot Password ?</a>
                  </div>
                  <div className='h5 font-weight-300'>
                    Don't have an account ?{" "}
                    <a href='#'> Register for an account</a>
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

export default Register
