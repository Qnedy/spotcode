import React from 'react';
import NavbarFooter from '../../components/partials/Navbar_footer';

import Albums from '../../components/Albums';

import SectionWrapper from '../../components/partials/Section_wrapper';

const AlbumScreen = () => {
    return(
        <>
            <SectionWrapper>
                <Albums />
                <NavbarFooter />
            </SectionWrapper>
            
        </>
    )
}

export default AlbumScreen;