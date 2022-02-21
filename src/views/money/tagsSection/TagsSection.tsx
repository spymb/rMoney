import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from '../../../hooks/useTags';
import Icon from '../../../components/Icon';
import {CategorySection} from '../CategorySection';
import {Link} from 'react-router-dom';

const Wrapper = styled.section`
  font-size: 12px;
  flex: 5;
  overflow: auto;
  border-bottom: 1px solid #333333;

  ::-webkit-scrollbar {
    display: none;
  }

  > ol {
    display: flex;
    flex-wrap: wrap;
    padding: 4px 0;

    > li {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4px 0;
      cursor: pointer;

      > div {
        width: 70%;
        height: 45px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          width: 26px;
          height: 26px;
        }
      }

      > span {
        margin-top: 3px;
      }

      &.selected {
        color: #005DFF;

        > div {
          background: #E8F1FF;

          .icon {
            fill: #005DFF;
          }
        }
      }
    }

    > a {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4px 0;
      cursor: pointer;

      > div {
        width: 70%;
        height: 45px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          width: 26px;
          height: 26px;
        }
      }

      > span {
        margin-top: 3px;
      }
    }
}
`;


type Props = {
  value: number[]
  onChange: (selected: number[]) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags} = useTags();
  const [category, setCategory] = useState<'-' | '+'>('-');
  const tagsByType = tags.filter(tag => tag.type === category);

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
    <Wrapper>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>

      <ol>
        {
          tagsByType.map(tag => {
            return (
              <li key={tag.id} onClick={() => onToggleTag(tag.id)}
                  className={getClass(tag.id)}>
                <div>
                  <Icon className="icon" name={tag.icon}/>
                </div>
                <span>{tag.name}</span>
              </li>
            );
          })}

        <Link to="/setTag">
          <div>
            <Icon className="icon" name="settings"/>
          </div>
          <span>设置</span>
        </Link>

      </ol>
    </Wrapper>

  );
};

export {TagsSection};