/*eslint-disable*/
import React from "react"

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap"

const MainFooter = () => {
  return (
    <>
      <Container fluid>
        <footer className='py-5' id='footer-main'>
          <Row className='align-items-center justify-content-lg-between'>
            <Col lg='6'>
              <div className='copyright text-center text-lg-left text-muted'>
                Copyright © 2016 - {new Date().getFullYear()}{" "}
                <a
                  className='font-weight-bold ml-1'
                  href='https://instagram.com/iamevansobeng'
                  target='_blank'
                >
                  Evans Obeng
                </a>
              </div>
            </Col>
            <Col lg='6'>
              <Nav className='nav-footer justify-content-center justify-content-lg-end'>
                <NavItem>
                  <NavLink
                    href='https://facebook.com/iamevansobeng'
                    target='_blank'
                  >
                    Evans Obeng
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='https://etonan.com' target='_blank'>
                    Website
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href='https://facebook.com/iamevansobeng'
                    target='_blank'
                  >
                    Facebook
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href='https://twitter.com/iamevansobeng'
                    target='_blank'
                  >
                    Twitter
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </footer>
      </Container>
    </>
  )
}

export default MainFooter
