import React, {ReactNode} from 'react';
import {useTags} from '../../../hooks/useTags';
import Icon from '../../../components/Icon';
import classNames from 'classnames';
import {TagsWrapper} from './TagsWrapper';

type Props = {
  ID: number
  onChangeID: (ID: number) => void
  category: '-' | '+'
  lostTag?: ReactNode
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags} = useTags();
  const tagsByType = tags.filter(tag => tag.type === props.category);
  const selectedTagID = props.ID;
  const selectTag = (tagID: number) => {
    if (tagID !== selectedTagID) {
      props.onChangeID(tagID);
    }
  };

  return (
    <TagsWrapper>
      <ol>
        {
          tagsByType.map(tag => {
            const active = classNames({'selected': tag.id === selectedTagID});
            const onToggle = () => {
              selectTag(tag.id);
            };

            return (
              <li key={tag.id} onClick={onToggle}
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