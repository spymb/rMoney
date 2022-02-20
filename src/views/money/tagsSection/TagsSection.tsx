import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from '../../../hooks/useTags';
import Icon from '../../../components/Icon';
import {CategorySection} from '../CategorySection';

const gap = '20px';
const iconSize = '60%';

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: ${parseInt(gap) / 2}px;
  align-items: flex-start;
`
const TagItem = styled.li`
  width: 20%;
  margin: ${parseInt(gap) / 2}px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #eeeeee;
  margin-bottom: 6px;

  &.selected {
    background-color: #42a5f5;

    > .icon {
      fill: #fff;
    }
  }
`;

type Props = {
  value: number[]
  onChange: (selected: number[]) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const [category, setCategory] = useState<'-' | '+'>('-');
  const tagsByType = tags.filter(tag => tag.type === category)

  const selectedTagIDs = props.value;
  const onToggleTag = (tagID: number) => {
    const index = selectedTagIDs.indexOf(tagID);
    if (index >= 0) {
      props.onChange(selectedTagIDs.filter(ID => ID !== tagID));
    } else {
      props.onChange([...selectedTagIDs, tagID]);
    }
  };
  const getClass = (tagID: number) => selectedTagIDs.indexOf(tagID) >= 0 ? 'selected' : '';

  return (
    <div>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>

      <Wrapper>
        {
          tagsByType.map(tag => {
            return (
              <TagItem key={tag.id} onClick={() => onToggleTag(tag.id)}>
                <IconWrapper className={getClass(tag.id)}>
                  <Icon className="icon" name={tag.icon} size={iconSize}/>
                </IconWrapper>
                {tag.name}
              </TagItem>
            );
          })}

        {
          <TagItem onClick={addTag}>
            <IconWrapper>
              <Icon className="icon" name="tianjia" size={iconSize}/>
            </IconWrapper>
            添加
          </TagItem>
        }
      </Wrapper>
    </div>

  );
};

export {TagsSection};