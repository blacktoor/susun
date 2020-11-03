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
import { Link } from "react-router-dom"

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [occupation, setOccupation] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const onSubmit = (e) => {
    var tClass = false
    // CHECKING IF ALL FIELDS ARE IN THIER VALID STATES
    tClass = document.getElementsByClassName("is-invalid")
    e.preventDefault()
    const Data = {
      firstName,
      lastName,
      email,
      address,
      phone,
      occupation,
      password,
    }
    if (tClass.length !== 0) {
      alert("Error occured")
    } else {
      console.log(Data)
    }
  }
  return (
    <>
      <MainHeader
        title='Register for a Free Account'
        lead='Get started with Susun . FIll the form below with valid information'
      />
      <Container className='mt--7'>
        <Row className='justify-content-center'>
          <Col md={6}>
            <Card className='align-selft-center'>
              <CardBody className=' offset-1 justify-content-center'>
                <Form>
                  <Row className='form-row'>
                    <Col md={10}>
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
                              validator.isAlpha(firstName) &&
                              firstName.toString().length >= 3
                                ? "is-valid"
                                : "is-invalid"
                            }
                            placeholder='Firstname Here'
                            type='text'
                            onChange={(f) => setFirstName(f.target.value)}
                          />
                          <div className='invalid-feedback'>
                            Enter your real Firstname , not a nickname
                          </div>
                          <div className='valid-feedback'>
                            Your Firstname is {firstName}
                          </div>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md={10}>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='lastName'
                        >
                          LastName
                        </label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-single-02' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id='lastName'
                            className={
                              validator.isAlpha(lastName) &&
                              lastName.toString().length >= 3
                                ? "is-valid"
                                : "is-invalid"
                            }
                            placeholder='Lastname here'
                            type='email'
                            value={lastName}
                            onChange={(l) => setLastName(l.target.value)}
                          />
                          <div className='invalid-feedback'>
                            Enter your real Lastname , not a nickname
                          </div>
                          <div className='valid-feedback'>
                            Your LastName is {lastName}
                          </div>
                        </InputGroup>
                      </FormGroup>
                    </Col>

                    <Col md={10}>
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
                    <Col md={10}>
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
                    <Col md={10}>
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
                            Your number is invalid. Enter only numbers
                          </div>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md={10}>
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
                    <Col md={10}>
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
                    <Col md={10}>
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
                              password === password2 &&
                              password2.length > 5
                                ? "is-valid"
                                : "is-invalid"
                            }
                            placeholder='confirm password'
                            type='password'
                            value={password2}
                            onChange={(s) => setPassword2(s.target.value)}
                          />
                          <div className='invalid-feedback'>
                            Passwords do not match or less than 6 characters
                          </div>
                          <div className='valid-feedback'>
                            Great , your passwords match
                          </div>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Col className='offset-sm-0 offset-md-4 offset-lg-2 pb-3'>
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
                    Already have an account ?{" "}
                    <Link
                      to='/login'
                      title='Login'
                      style={{ letterSpacing: 0.6, fontWeight: 700 }}
                    >
                      Login
                    </Link>
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
