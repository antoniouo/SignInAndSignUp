import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../Redux/actions/userActions';

function MyNavBar(args) {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <Navbar {...args} light expand="md">
        <NavbarBrand className="nav-link" to="/">MyPage</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {user.id
              ? (
                <>
                  <NavItem>
                    <span className="nav-link">
                      Hello,
                      {' '}
                      {user.name}
                    </span>
                  </NavItem>
                  <NavItem>
                    <Button onClick={logoutHandler} color="primary" outline className="nav-link">
                      logout
                    </Button>
                  </NavItem>
                </>
              )
              : (
                <>
                  <NavItem>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/SignUp">SignUp</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/SignIn">SignIn</NavLink>
                  </NavItem>
                </>
              )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
