import styled from 'styled-components';

const TagsWrapper = styled.section`
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

export {TagsWrapper};