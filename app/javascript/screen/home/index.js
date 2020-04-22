import React, { Fragment } from 'react';
import { Columns, Heading } from 'react-bulma-components';
import SectionWrapper from '../../components/partials/Section_wrapper';
 
const HomeScreen = () => {
  return (
    <SectionWrapper>
      <Columns>
        <Columns.Column>
            <Heading className='has-text-weight-light has-text-centered has-text-white' size={1}>
              SEU APP DE <br /><span className='has-text-success'>MÚSICA</span>
            </Heading>
        </Columns.Column>
      </Columns>
      <Columns className="is-centered is-mobile">
        <Columns.Column mobile={{ size: 8, offset: 1 }} desktop={{ size: 4, offset: 2 }}>
          
         
        </Columns.Column>
      </Columns>
      <Columns className="has-text-centered">
       
      </Columns>
    </SectionWrapper>
  );
}
export default HomeScreen;