import {useEffect, useState} from 'react';
import {createID} from '../lib/createID';
import {useUpdate} from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createID(), name: '衣'},
        {id: createID(), name: '食'},
        {id: createID(), name: '住'},
        {id: createID(), name: '行'},
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt('请输入新标签名');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createID(), name: tagName}]);
    }
  };
  const getTagName = (id: number) => {
    const tag = findTag(id)
    return tag ? tag.name : '';
  };

  return {tags, setTags, findTag, findTagIndex, updateTag, deleteTag, addTag, getTagName};
};

export {useTags};