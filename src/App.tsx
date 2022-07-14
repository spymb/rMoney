import React, {useEffect, useState} from 'react';
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
import Popup from 'components/date_picker/Popup';

const rcode = require('./rcode.png')

const AppWrapper = styled.div`
  color: #333;
  max-width: 451px;
  margin: 0 auto;
  background: #f5f5f5;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [visible, setVisible] = useState(false)
  useEffect(()=> {
    console.log(window.innerWidth);
    if (window.innerWidth > 450) {
      setVisible(true)
    }
  }, [])

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
      <Popup position='center' visible={visible} onCancel={() => setVisible(false)}>
        <p style={{textAlign: 'center'}}>为保证最佳用户体验</p>
        <p style={{textAlign: 'center'}}>请使用手机扫码预览</p>
        <Wrapper>
          <img src={rcode} alt="rcode" style={{width: '250px'}}/>
        </Wrapper>
      </Popup>
    </AppWrapper>
  );
}

export default App;