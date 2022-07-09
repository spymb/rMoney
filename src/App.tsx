import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Money from './views/money/Money';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import {SetTag} from './views/money/SetTag';
import {AddTag} from './views/money/AddTag';
import {Details} from './views/Details';
import {Statistics} from './views/Statistics';

const AppWrapper = styled.div`
  color: #333;
  max-width: 420px;
  margin: 0 auto;
  background: #f5f5f5;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/money" element={<Money/>}/>
          <Route path="/setTag/:id" element={<SetTag/>}/>
          <Route path="/addTag/:id" element={<AddTag/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="/" element={<Navigate replace to="/money"/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </Router>
    </AppWrapper>

  );
}

export default App;