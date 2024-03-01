import { Top, Bottom, Middle, MiddleItem, TopLeft, TopRight, BottomLeft, BottomRight, AllListBox, AllListBtn, AllListText } from './BackgroundItem.style';
import { IoIosArrowForward } from 'react-icons/io';

const BackgroundItem = () => {
  return (
    <>
      <Top>
        <TopLeft>
          Todo<br></br>List
        </TopLeft>
        <TopRight>Try</TopRight>
      </Top>
      <Middle>
        <MiddleItem>
          No great man<br></br> ever complains<br></br> of want of opportunity.
        </MiddleItem>
      </Middle>
      <AllListBox>
        <AllListText>
          All of<br></br> the List
        </AllListText>
        <AllListBtn>
          <IoIosArrowForward size={'22px'} />
        </AllListBtn>
      </AllListBox>
      <Bottom>
        <BottomLeft>SCROLL BABY SCROLL</BottomLeft>
        <BottomRight>MIND THE GAP</BottomRight>
      </Bottom>
    </>
  );
};

export default BackgroundItem;
