// eslint-disable-next-line
import React, {useEffect, useState} from 'react';
import {createID} from '../lib/createID';
import {useUpdate} from './useUpdate';
import {useNavigate} from 'react-router-dom';

export type Tag = {
  id: number;
  name: string;
  icon: string;
  type: '+' | '-';
}

const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  useNavigate();
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createID(), name: '服饰', icon: 'fushi', type: '-'},
        {id: createID(), name: '餐饮', icon: 'canyin', type: '-'},
        {id: createID(), name: '日用', icon: 'riyongpin', type: '-'},
        {id: createID(), name: '交通', icon: 'jiaotong', type: '-'},
        {id: createID(), name: '书籍', icon: 'dushu', type: '-'},
        {id: createID(), name: '旅行', icon: 'lvxing', type: '-'},
        {id: createID(), name: '工资', icon: 'gongzi', type: '+'},
        {id: createID(), name: '兼职', icon: 'jianzhi', type: '+'},
        {id: createID(), name: '理财', icon: 'licai', type: '+'}
      ];
    }
    setTags(localTags);
  }, []);
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
  const updateTag = (ID: number, obj: { name: string }) => {
    setTags(tags.map(tag => {
      if (obj.name === '') {
        window.location.reload();
        return tag;
      }
      const {name, ...rest} = tag;
      return tag.id === ID ? {name: obj.name, ...rest} : tag;
    }));
    window.location.reload();
    window.alert('成功修改标签名');
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
    window.alert('成功删除标签');
    window.location.reload();
  };
  const addTag = (obj: { name: string }, iconName: string, type: '-' | '+') => {
    const names = tags.map(item => item.name);
    if (obj.name === '') {
      window.alert('标签名不能为空');
    } else if (names.indexOf(obj.name) >= 0) {
      window.alert('标签名不能重复');
    } else {
      setTags([...tags, {id: createID(), name: obj.name, icon: iconName, type: type}]);
      window.alert('成功添加标签');
    }
    window.location.reload();
  };
  const getTagName = (id: number) => {
    const tag = findTag(id);
    return tag ? tag.name : '';
  };
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

  return {tags, setTags, findTag, findTagIndex, deleteTag, addTag, getTagName, updateTag};
};

export {useTags};