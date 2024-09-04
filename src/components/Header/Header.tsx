import styled from "styled-components";
import SunBTCMainLogo from '../../assets/SunBTCMainLogo.webp';
import { Link } from "react-router-dom";
import { HeaderLink } from "../CustomLinks/HeaderLinks";

const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NameBlock = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    margin-right: auto;
    @media (max-width: 800px) {
        margin-left: 15px;
    }
`

const SunBTCNameBlock = styled.img`
    width: 45px;
    height: 45px;
`

const Name = styled.a`
    font-size: 26px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    margin-left: 10px;
    margin-top: 5px;
    @media (max-width: 800px) {
        font-size: 25px;
    }
`

const NavBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 5px;
    margin-left: 43px;
    gap: 20px;
    @media (max-width: 800px) {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 70px;
        background-color: #2227;
        margin-top: 0px;
        margin-left: 0px;
        display: flex;
        align-items: center;
    }
`

const NavItem = styled.a`
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 800px) {
        font-size: 16px;
        margin-top: 8px;
    }
`


export const Header = () => {
    return (
        <HeaderContainer>
            <NameBlock>
                <SunBTCNameBlock src={SunBTCMainLogo} />
                <Name>SunBTC</Name>
            </NameBlock>
            <NavBlock>
                <HeaderLink to="/">
                    <NavItem>Home</NavItem>
                </HeaderLink>
                <HeaderLink to="/marcketplace">
                    <NavItem>Marcketplace</NavItem>
                </HeaderLink>
            </NavBlock>
        </HeaderContainer>
    )
}



