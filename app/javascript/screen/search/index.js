import React, { Fragment } from 'react';
import SectionWrapper from '../../components/partials/Section_wrapper'
import { Heading } from 'react-bulma-components';
import Search from '../../components/Search';
import NavbarFooter from '../../components/partials/Navbar_footer';

const SearchScreen = () => {
 return (
   <Fragment>
     <SectionWrapper>
       <Heading className='has-text-centered has-text-white'>Buscar</Heading>
       <Search/>
     </SectionWrapper>
     <NavbarFooter/>
   </Fragment>
);
}

export default SearchScreen;