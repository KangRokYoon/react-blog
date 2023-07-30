import headerImg from "assets/headerImg.jpeg"
import styled from 'styled-components';

const Headers = styled.div`
    margin-top: 60px;
`
const HeaderTitles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lora', serif;
`


const Header = () => {
    return (
        <Headers>
            <HeaderTitles>
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </HeaderTitles>
                <img src={headerImg} alt="" className="headerImg" />
        </Headers>
    );
};

export default Header; 