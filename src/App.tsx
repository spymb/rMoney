import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/tags" element={<Tags/>}/>
          <Route path="/money" element={<Money/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="/" element={<Navigate replace to="/money"/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

function NoMatch() {
  return (
    <div>页面不存在</div>
  );
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

export default App;