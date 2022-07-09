import React, {ReactNode} from 'react';
import {Tag} from '../../../hooks/useTags';
import Icon from '../../Icon';
import classNames from 'classnames';
import {TagsWrapper} from './TagsWrapper';

type formData = {
  category: '-' | '+',
  tagID: number,
  name: string,
  icon: string,
  notes: string,
  amount: number
};

type Props = {
  tags: Tag[]
  ID: number
  onChangeID?: (id: number) => void
  onChangeTag?: (obj: Partial<formData>) => void
  category: '-' | '+'
  lostTag?: ReactNode
}

const TagsSection: React.FC<Props> = (props) => {
  const tagsByType = props.tags.filter(tag => tag.type === props.category);
  const selectedTagID = props.ID;
  const selectTag = (tag: Tag) => {
    if (tag.id !== selectedTagID) {
      props.onChangeTag && props.onChangeTag({tagID: tag.id, name: tag.name, icon: tag.icon});
    }
  };
  const selectTagID = (id: number) => {
    if (id !== selectedTagID) {
      props.onChangeID && props.onChangeID(id);
    }
  };


  return (
    <TagsWrapper>
      <ol>
        {
          tagsByType.map(tag => {
            const click = () => {
              selectTag(tag)
              selectTagID(tag.id)
            }
            const active = classNames({'selected': tag.id === selectedTagID});

            return (
              <li key={tag.id} onClick={click}
                  className={active}>
                <div>
                  <Icon name={tag.icon} className="icon"/>
                </div>
                <span>{tag.name}</span>
              </li>
            );
          })}

        {props.lostTag}
      </ol>
    </TagsWrapper>
  );
};

export {TagsSection};