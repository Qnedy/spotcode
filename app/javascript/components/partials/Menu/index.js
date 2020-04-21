import React from 'react';
import { Navbar, Container, Columns, Button } from 'react-bulma-components';
import styled from 'styled-components';
import logo from '../../../assets/images/logo.png';
import { useLocation } from 'react-router-dom';

const ColumnsFullWidth = styled(Columns)`
    width: 100%;
    padding: 20px 10px;
`;

const Menu = () => {
  return(
    <>
      <Navbar color="dark">
        <Container>
            <ColumnsFullWidth className='is-mobile'>
                <Columns.Column desktop={{size: 2}} mobile={{size: 5}}>
                    <img src={logo} className="image" />
                </Columns.Column>
                <Columns.Column>
                  <a href="/users/sign_in" className="is-pulled-right is-right">
                     <Button outlined={true} color="white" >ENTRAR</Button>
                  </a>
                </Columns.Column>
            </ColumnsFullWidth>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu;