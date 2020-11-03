import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "reactstrap"

const MainHeader = (props) => {
  return (
    <>
      <div className='header bg-gradient-info py-7 py-lg-4 pt-lg-5'>
        <Container>
          <div className='header-body text-center mb-7'>
            <Row className='justify-content-center'>
              <Col className='px-5' lg='6' md='8' xl='5'>
                {props.title ? (
                  <h1 className='text-white'>{props.title}</h1>
                ) : null}
                {props.lead ? (
                  <p className='text-lead text-white'>{props.lead}</p>
                ) : null}
              </Col>
            </Row>
          </div>
        </Container>
        <div className='separator separator-bottom separator-skew zindex-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon className='fill-default' points='2560 0 2560 100 0 100' />
          </svg>
        </div>
      </div>
    </>
  )
}
MainHeader.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string,
}
export default MainHeader
