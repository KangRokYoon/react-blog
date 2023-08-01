import headerImg from "assets/headerImg.jpeg"
import styled from 'styled-components';

const Headers = styled.div`
    margin-top: 60px;

    .headerImg {
        width: 100%;
        height: 600px;
        margin-top: 80px;
        object-fit: cover;
    }
`
const HeaderTitles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lora', serif;
    color: #444; 

    .headerTitleSm {
        position:absolute;
        top: 15%;
        font-size: 20px;
    }

    .headerTitleLg {
        position:absolute;
        top: 17%;
        font-size: 100px;
    }
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