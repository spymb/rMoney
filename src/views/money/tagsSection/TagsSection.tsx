import React, {ReactNode} from 'react';
import {useTags} from '../../../hooks/useTags';
import Icon from '../../../components/Icon';
import classNames from 'classnames';
import {TagsWrapper} from './TagsWrapper';

type Props = {
  IDs?: number[]
  onChangeIDs?: (IDs: number[]) => void
  ID?: number
  onChangeID?: (ID: number) => void
  category: '-' | '+'
  lostTag?: ReactNode
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags} = useTags();
  const tagsByType = tags.filter(tag => tag.type === props.category);

  const selectedTagIDs = props.IDs || [];
  const onToggleTags = (tagID: number) => {
    const index = selectedTagIDs.indexOf(tagID);
    if (props.onChangeIDs) {
      if (index >= 0) {
        props.onChangeIDs(selectedTagIDs.filter(ID => ID !== tagID));
      } else {
        props.onChangeIDs([...selectedTagIDs, tagID]);
      }
    }
  };

  const selectedTagID = props.ID || 0
  const onToggleTag = (tagID: number) => {
    if (props.onChangeID) {
      if (tagID !== selectedTagID) {
        props.onChangeID(tagID)
      } else {
        props.onChangeID && props.onChangeID(0)
      }
    }
  }

  return (
    <TagsWrapper>
      <ol>
        {
          tagsByType.map(tag => {
            const active1 = classNames({'selected': selectedTagIDs.indexOf(tag.id) >= 0})
            const active2 = classNames({'selected': tag.id === selectedTagID})
            const onToggle = () => {
              onToggleTags(tag.id)
              onToggleTag(tag.id)
            }

            return (
              <li key={tag.id} onClick={onToggle}
                  className={classNames(active1, active2)}>
                <div>
                  <Icon className="icon" name={tag.icon}/>
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