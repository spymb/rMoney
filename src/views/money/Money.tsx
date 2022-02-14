import React from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import {TagsSection} from './TagsSection';
import {CategorySection} from './CategorySection';
import {NotesSection} from './NotesSection';
import {NumberPadSection} from './NumberPadSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagsSection/>

      <NotesSection/>

      <CategorySection/>

      <NumberPadSection/>
    </MyLayout>
  );
}

export default Money;