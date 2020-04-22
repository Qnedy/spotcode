import React from 'react';
import { Navbar, Container, Columns, Button, Dropdown } from 'react-bulma-components';
import styled from 'styled-components';
import logo from '../../../assets/images/logo.png';
import { useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const ColumnsFullWidth = styled(Columns)`
    width: 100%;
    padding: 20px 10px;
`;

const Menu = () => {
  let actionButton;

  useLocation().pathname == '/' ? actionButton = <a href="/users/sign_in" className="is-pulled-right is-right">
    <Button outlined={true} color="white" >ENTRAR</Button>
  </a> : actionButton = <Dropdown className='is-pulled-right is-right' color='dark' label={<FaUserCircle size="2em" />}>
                          <Dropdown.Item value="other">
                              <a href='/users/edit'>
                                Edit User
                              </a>
                          </Dropdown.Item>
                          <Dropdown.Item value="other">
                              <a href='/users/sign_out'>
                                LogOut
                              </a>
                          </Dropdown.Item>
                        </Dropdown>;

  return(
    <>
      <Navbar color="dark">
        <Container>
            <ColumnsFullWidth className='is-mobile'>
                <Columns.Column desktop={{size: 2}} mobile={{size: 5}}>
                    <img src={logo} className="image" />
                </Columns.Column>
                <Columns.Column>
                  {actionButton}
                </Columns.Column>
            </ColumnsFullWidth>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu;