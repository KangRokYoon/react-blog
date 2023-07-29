
import styled from 'styled-components';
import {AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai'
import {FaPinterestSquare, FaInstagramSquare} from 'react-icons/fa'

const Top = styled.div`
    width:100%;
    height:50px;
    background-color: white  ;
    position: sticky;
    top: 0;
    display:flex;
    align-items: center;
    font-family: 'Josefin Sans', sans-serif;
`
const TopLeft = styled.div`
    flex: 3;
`

const TopRight = styled.div`
    flex: 3;
`

const TopCenter = styled.div`
    flex: 6;
`

const TopBar = () => {
    return (
      <Top>
        <TopLeft>
            <AiFillFacebook/>
            <AiFillTwitterSquare/>
            <FaPinterestSquare/>
            <FaInstagramSquare/>
        </TopLeft>
        <TopCenter>c</TopCenter>
        <TopRight>r</TopRight>
      </Top>
    );
};

export default TopBar;