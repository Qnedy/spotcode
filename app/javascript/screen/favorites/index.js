import React, { Fragment } from 'react';
import NavbarFooter from '../../components/partials/Navbar_footer';
import SectionWrapper from '../../components/partials/Section_wrapper';
import { Heading } from 'react-bulma-components';
import Favorites from '../../components/Favorites';

const FavoritesScreen = () => {
    return(
        <Fragment>
            <SectionWrapper>
                <Heading className='has-text-centered has-text-white'>Favoritos</Heading>
                <Favorites/>
            </SectionWrapper>
            <NavbarFooter/>
        </Fragment>
    )
}

export default FavoritesScreen;