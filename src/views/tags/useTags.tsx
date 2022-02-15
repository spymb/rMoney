import {useState} from 'react';
import {createID} from '../../lib/createID';

const defaultTags = [
  {id: createID(), name: '衣'},
  {id: createID(), name: '食'},
  {id: createID(), name: '住'},
  {id: createID(), name: '行'},
];

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];

  return {tags, setTags, findTag};
};

export {useTags};