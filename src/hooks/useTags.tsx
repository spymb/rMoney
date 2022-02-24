import React, {useEffect, useState} from 'react';
import {createID} from '../lib/createID';
import {useUpdate} from './useUpdate';

export type Tag = {
  id: number;
  name: string;
  icon?: string;
  type?: '+' | '-';
}

const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createID(), name: "餐饮", icon: "canyin", type: "-"},
        {id: createID(), name: "服饰", icon: "fushi", type: "-"},
        {id: createID(), name: "读书", icon: "dushu", type: "-"},
        {id: createID(), name: "交通", icon: "jiaotong", type: "-"},
        {id: createID(), name: "旅行", icon: "lvxing", type: "-"},
        {id: createID(), name: "日用", icon: "riyongpin", type: "-"},
        {id: createID(), name: "工资", icon: "gongzi", type: "+"},
        {id: createID(), name: "兼职", icon: "jianzhi", type: "+"},
        {id: createID(), name: "理财", icon: "licai", type: "+"}
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
  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
    window.location.reload();
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
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);


  return {tags, setTags, findTag, findTagIndex, updateTag, deleteTag, addTag, getTagName};
};

export {useTags};