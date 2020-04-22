import React from 'react';
import NavbarFooter from '../../components/partials/Navbar_footer';
import Discovery from '../../components/Discovery';
import SectionWrapper from '../../components/partials/Section_wrapper';

const DiscoveryScreen = () => {
    return(
        <>
            <SectionWrapper>
                <Discovery />
            </SectionWrapper>
            <NavbarFooter />
        </>
    )
}

export default DiscoveryScreen;