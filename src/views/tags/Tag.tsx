import React from 'react';
import {useTags} from './useTags';
import {useParams} from 'react-router-dom';

const Tag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams();
  const tag = findTag(parseInt(id as string));

  return (
    <div>{tag.name}</div>
  );
};

export {Tag};