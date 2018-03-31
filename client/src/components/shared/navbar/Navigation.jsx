import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';

const Navigation = () => (
  <Menu inverted fixed="top">
    <Container>
      <Menu.Item as={NavLink} to="/" name="home">
        Accueil
      </Menu.Item>
      <Menu.Item as={NavLink} to="/events" name="events">
        Events
      </Menu.Item>
      <Menu.Item as={NavLink} to="/events/new" name="new_event">
        New Events
      </Menu.Item>
      <Menu.Item position='right'>
        <Button as={NavLink} to="/login" name="login">
          Log in
        </Button>
        <Button as={NavLink} to="/register" name="register" style={{ marginLeft: '0.5em' }}>
          Sign Up
        </Button>
      </Menu.Item>
    </Container>
  </Menu>
);

export default Navigation;