import React, {FC} from 'react';
import styled from 'styled-components';
import {TagsSection} from './TagsSection';
import {EditTag} from './EditTag';
import {Button} from '../../../components/Button';
import {Space} from '../../../components/Space';
import {Center} from '../../../components/Center';
import {Link, useNavigate} from 'react-router-dom';
import Icon from '../../../components/Icon';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 10px;
  padding: 4px;
  background: white;
  font-size: 12px;
`;


const SetTag: FC = () => {
  const child2 = <Link to="/addTag">
    <div>
      <Icon className="icon" name="tianjia"/>
    </div>
    <span>添加</span>
  </Link>;
  /*const [category, setCategory] = useState<'-' | '+'>('-');*/
  const navigate = useNavigate();
  /*const query = useQuery();
  const history = useHistory();
  const {categories} = useContext(CategoriesContext);
  const [moneyType, setMoneyType] = useState(
    query.get("moneyType") || 'expenditure'
  );
  const filteredCategory = categories.filter(item => item.moneyType === moneyType)

  const handleClick = (id: string) => {
    history.push(`/category/edit/${id}`);
  };

  const onAddClick = (e: React.MouseEvent) => {
    history.push(`/category/add?moneyType=${moneyType}`);
    e.stopPropagation();
  };*/
  return (
    <Wrapper>
      <Topbar>
        <Icon name="left" onClick={() => navigate(-1)}/>
        <span>自定义标签</span>
        <Icon/>
      </Topbar>

      <TagsSection value={[] as number []} onChange={() => {}}
                   child1={<EditTag name="" icon=""/>}
                   child2={child2}/>


      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>删除标签</Button>
      </Center>

    </Wrapper>
  );
};
export {SetTag};