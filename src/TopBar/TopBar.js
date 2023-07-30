
import styled from 'styled-components';
import {AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai'
import {FaPinterestSquare, FaInstagramSquare} from 'react-icons/fa'
import { BiSearchAlt2 } from 'react-icons/bi';
import topImg from 'assets/topImg.jpeg';

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
    display:flex;
    align-items: center;
    justify-content: center;

    .topIcon {
        font-size: 20px;
        margin-right:10px;
        color: #444;
        cursor: pointer;
    }
`

const TopRight = styled.div`
    flex: 3;
    display:flex;
    align-items: center;
    justify-content: center;

    .topImg {
         width: 40px;
         height: 40px;
         border-radius: 50%;
         object-fit: cover;
    }

    .topSearchIcon {
        font-size: 18px;
        color: #666;
        cursor: pointer;
        margin-left: 15px;
    }
`

const TopCenter = styled.div`
    flex: 6;

    .topList {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .topListItem {
        margin-right: 20px;
        font-size: 18px;
        font-weight: 300;
        cursor: pointer;

    }
`


const TopBar = () => {
    return (
      <Top>
        <TopLeft>
            <div className='topIcon'>
                <AiFillFacebook/>
                <AiFillTwitterSquare/>
                <FaPinterestSquare/>
                <FaInstagramSquare/>
            </div>
        </TopLeft>
        <TopCenter>
            <ul className='topList'>
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li>
            </ul>
        </TopCenter>
        <TopRight>
            <img className="topImg" src={topImg} alt='' />
            <BiSearchAlt2 className='topSearchIcon'/>
        </TopRight>
      </Top>
    );
};

export default TopBar;