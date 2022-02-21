import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Tags from './views/tags/Tags';
import Money from './views/money/Money';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import {Tag} from './views/tags/Tag';
import {SetTag} from './views/money/tagsSection/SetTag';

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/tags" element={<Tags/>}/>
          <Route path="/tags/:id" element={<Tag/>}/>
          <Route path="/money" element={<Money/>}/>
          <Route path="/setTag" element={<SetTag/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="/" element={<Navigate replace to="/money"/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </Router>
    </AppWrapper>

  );
}

export default App;