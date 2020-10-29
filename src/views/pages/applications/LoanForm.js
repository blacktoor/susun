import React from "react"
import {
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap"
import ReactDatetime from "react-datetime"

import ApplicationHeader from "components/Headers/ApplicationHeader"
import { useState } from "react"

const LoanForm = () => {
  const [firstName, setFirstName] = useState("")
  const [agreeVal, setAgreeVal] = useState(false)
  return (
    <>
      <ApplicationHeader name='Loan Application' parentName='Applicatons' />
      <Container className='mt--6' fluid>
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h3 className='mb-0 text-center '>Application for Loan</h3>
              </CardHeader>

              <CardBody>
                <Row>
                  <Col lg='8'>
                    <p className='mb-0'>
                      Fill the form with acurate information
                      {/* We recommend using client side validation, but in case you
                      require server side, you can indicate invalid and valid
                      form fields with <code>.is-invalid</code> and{" "}
                      <code>.is-valid</code>. Note that{" "}
                      <code>.invalid-feedback</code> is also supported with
                      these classes. */}
                    </p>
                  </Col>
                </Row>
                <hr />
                <Form>
                  <div className='form-row'>
                    <Col className='mb-3' md='4'>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='firstName'
                        >
                          First name
                        </label>
                        <Input
                          className={
                            firstName === "" || firstName.length < 3
                              ? "is-invalid"
                              : "is-valid"
                          }
                          id='firstName'
                          placeholder='First name'
                          required
                          onChange={(e) => setFirstName(e.target.value)}
                          type='text'
                        />
                      </FormGroup>
                    </Col>
                    <Col className='mb-3' md='4'>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='lastName'
                        >
                          Last name
                        </label>
                        <Input
                          id='lastName'
                          placeholder='Last name'
                          required
                          type='text'
                        />
                      </FormGroup>
                    </Col>
                    <Col className='mb-3' md='4'>
                      <FormGroup>
                        <label className='form-control-label' htmlFor='email'>
                          Email
                        </label>
                        <Input
                          aria-describedby='inputGroupPrepend3'
                          id='email'
                          placeholder='Enter a valid email address'
                          required
                          type='email'
                        />
                      </FormGroup>
                    </Col>
                  </div>
                  <div className='form-row'>
                    <Col className='mb-3' md='4'>
                      <label className='form-control-label' htmlFor='sex'>
                        Sex / Gender
                      </label>
                      <FormGroup className='has-danger ml-3 pt-3' row>
                        <div className='custom-control custom-radio mb-3 mr-4'>
                          <input
                            className='custom-control-input'
                            id='male'
                            name='sex'
                            type='radio'
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='male'
                          >
                            Male
                          </label>
                        </div>
                        <div className='custom-control custom-radio mb-3'>
                          <input
                            className='custom-control-input'
                            id='female'
                            name='sex'
                            type='radio'
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='female'
                          >
                            Female
                          </label>
                        </div>
                      </FormGroup>
                    </Col>
                    <Col className='mb-3' md='4'>
                      <FormGroup>
                        <label className='form-control-label' htmlFor='phone'>
                          Telephone Number
                        </label>
                        <Input
                          id='phone'
                          placeholder='0244-444-444'
                          required
                          type='tel'
                        />
                      </FormGroup>
                    </Col>
                    <Col className='mb-3' md='4'>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='resident'
                        >
                          Residential Address
                        </label>
                        <Input
                          id='resident'
                          placeholder='Home'
                          required
                          type='text'
                        />
                      </FormGroup>
                    </Col>
                  </div>
                  <div className='form-row'>
                    <Col className='mb-3' md='4'>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='ocupation'
                        >
                          Ocupation
                        </label>
                        <Input
                          id='ocupation'
                          placeholder='What do you do for a living'
                          required
                          type='text'
                        />
                      </FormGroup>
                    </Col>
                    <Col className='mb-3' md='3'>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='occupationLocation'
                        >
                          Occupation Location
                        </label>
                        <Input
                          id='occupationLocation'
                          placeholder='Location of Business'
                          required
                          type='text'
                        />
                      </FormGroup>
                    </Col>
                    <Col className='mb-3' md='5'>
                      <FormGroup className='has-danger'>
                        <label
                          className='form-control-label'
                          htmlFor='validationServerUsername'
                        >
                          Proof of Identity [ ID CARD / PASSPORT]
                        </label>
                        <div className='custom-file'>
                          <input
                            className='custom-file-input'
                            id='customFileLang'
                            lang='en'
                            type='file'
                          />
                          <label
                            className='custom-file-label'
                            htmlFor='customFileLang'
                          >
                            Select file
                          </label>
                        </div>
                      </FormGroup>
                    </Col>
                  </div>
                  <div className='form-row'>
                    <Col className='mb-3' md='6'>
                      <FormGroup>
                        <label
                          className='form-control-label'
                          htmlFor='exampleDatepicker'
                        >
                          Date of Birth
                        </label>
                        <ReactDatetime
                          inputProps={{
                            placeholder: "Select your date of birth",
                          }}
                          timeFormat={false}
                        />
                      </FormGroup>
                    </Col>
                    <Col className='mb-3' md='6'>
                      <FormGroup>
                        <label>Loan Amount Requested</label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>₵</InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder='Your name' type='text' />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </div>
                  <hr color='primary' />
                  <div className='form-row'>
                    <Col className='mb-3' md='6'>
                      <FormGroup>
                        <label>Name of Guarantor</label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='fas fa-user-md' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder='Surname first' type='text' />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col className='mb-3' md='6'>
                      <FormGroup>
                        <label>Telephone Number of Guarantor</label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='fas fa-phone-volume'></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Enter valid Telepone Number'
                            type='tel'
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col className='mb-3' md='6'>
                      <FormGroup>
                        <label>Occupation</label>
                        <InputGroup>
                          <Input placeholder='eg. Carpenter' type='text' />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col className='mb-3' md='6'>
                      <FormGroup>
                        <label>Ocupation Location</label>
                        <InputGroup>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='fas fa-building' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder='Surname first' type='text' />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col className='mb-3' md='6'>
                      <FormGroup className='has-danger'>
                        <label
                          className='form-control-label'
                          htmlFor='validationServerUsername'
                        >
                          Proof of Identity [ ID CARD / PASSPORT]
                        </label>
                        <div className='custom-file'>
                          <input
                            className='custom-file-input'
                            id='customFileLang'
                            lang='en'
                            type='file'
                          />
                          <label
                            className='custom-file-label'
                            htmlFor='customFileLang'
                          >
                            Select file
                          </label>
                        </div>
                      </FormGroup>
                    </Col>
                    <Col className='mb-3' md='6'>
                      <FormGroup className='has-danger'>
                        <label
                          className='form-control-label'
                          htmlFor='validationServerUsername'
                        >
                          Picture of Guarantor
                        </label>
                        <div className='custom-file'>
                          <input
                            className='custom-file-input'
                            id='customFileLang'
                            lang='en'
                            type='file'
                          />
                          <label
                            className='custom-file-label'
                            htmlFor='customFileLang'
                          >
                            Select file
                          </label>
                        </div>
                      </FormGroup>
                    </Col>
                  </div>
                  <FormGroup>
                    <div className='custom-control custom-checkbox mb-3'>
                      <Input
                        value={agreeVal}
                        className={`custom-control-input ${
                          agreeVal === true ? "is-valid" : "is-invalid"
                        }`}
                        defaultValue=''
                        id='invalidCheck3'
                        required
                        type='checkbox'
                        onChange={(e) => setAgreeVal(!agreeVal)}
                      />
                      <label
                        className='custom-control-label'
                        htmlFor='invalidCheck3'
                      >
                        Agree to terms and conditions
                      </label>
                      <div className='invalid-feedback'>
                        You must agree before submitting.
                      </div>
                    </div>
                  </FormGroup>
                  <Button color='primary' type='submit'>
                    Submit form
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoanForm
