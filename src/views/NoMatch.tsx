import React from 'react';
import Layout from '../components/Layout';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

function NoMatch() {
  return (
    <Layout>
      <Space/>
      <Space/>
      <Space/>
      <Center>
        <h2>页面不存在</h2>
      </Center>
    </Layout>
  );
}

export default NoMatch;