import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Container
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLungsVirus } from '@fortawesome/free-solid-svg-icons';

const NavbarComp = props => {
  return (
    <div >
      <Navbar color='dark' light expand='md' className='fixed-top' >
        <Container fluid={true}>
          <NavbarBrand
            style={{ marginLeft: '20px', marginTop: '-10px' }}
            href='/'
          >
            <FontAwesomeIcon
              icon={faLungsVirus}
              style={{ color: 'red', fontSize: '30px' }}
            />{' '}
            <span style={{color:"#f4f4f4",fontSize:'20px'}}>COVID-19 (Coronavirus) Daily App</span>
          </NavbarBrand>
          <Nav navbar className=' float-right'>
            <NavItem>
              <NavLink href='/'>
                <h6  style={{color:"#f4f4f4"}}>Home</h6>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/about-covid-19'>
                <h6  style={{color:"#f4f4f4"}}>What is COVID-19?</h6>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/about'>
                <h6  style={{color:"#f4f4f4"}}>About</h6>
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
