import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';

function Header ({menus}) {
  return (
    <Menu inverted fluid className='rounded-0'>
      <Container fluid className='container-fluid'>
        <Menu.Item as={Link} to="/" header>
          Bodybuilding for Dummies
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as={Link} to="/workouts">
            Workouts
          </Menu.Item>
          <Menu.Item as={Link} to="/nutrition">
            Nutrition
          </Menu.Item>
          <Menu.Item as={Link} to="/progress">
            Progress
          </Menu.Item>
          <Menu.Item as={Link} to="/settings">
            Settings
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Header;
