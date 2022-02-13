import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div>

      <div>
        <Routes>
          <Route path="/tags" element={<Tags/>} />
          <Route path="/money" element={<Money/>} />
          <Route path="/statistics" element={<Statistics/>} />
          <Route path="/" element={<Navigate replace to="/money" />} />
          <Route path="*" element={<NoMatch/>} />
        </Routes>
      </div>

      <div>
        <ul>
          <li>
            <Link to="/tags">标签页</Link>
          </li>
          <li>
            <Link to="/money">记账页</Link>
          </li>
          <li>
            <Link to="/statistics">统计页</Link>
          </li>
        </ul>
      </div>

    </div>
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