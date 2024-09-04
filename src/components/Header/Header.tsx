import styled from "styled-components";
import SunBTCMainLogo from '../../assets/SunBTCMainLogo.webp';
import { HeaderLink } from "../CustomLinks/HeaderLinks";
import MarcketplaceIcon from '../../assets/MarcketplaceIcon.svg';
import HomeIcon from '../../assets/HomeIcon.png';
import { WalletConnectWallet } from "@tronweb3/walletconnect-tron";
import TronLogo from '../../assets/TronLogo.png';

const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

const NameBlock = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
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

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
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

const NavBlock = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const NavItem = styled.a`
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 800px) {
        font-size: 16px;
        margin-top: 8px;
    }
`

const Icon = styled.img`
    width: 30px;
    height: 30px;
`

const ConnectButton = styled.button`
    background: linear-gradient(to right, #e97919, #e7290e);
    border: none;
    outline: none;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 5px;
`

const ConnectButtonText = styled.div`
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    padding: 10px 20px;
    display: flex;
    align-items: center;
`

const TronIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`


export const Header = () => {

    const wallet = new WalletConnectWallet({
        network: 'tron:mainnet',
        options: {
            projectId: '26740f7490cb1da6d1000d0f89d0d988',
            metadata: {
                name: 'SunBTCt',
                description: 'SunBTC',
                url: 'https://app.sunbtc.io/',
                icons: [SunBTCMainLogo]
            }
        }
    });

    return (
        <HeaderContainer>
            <NameBlock>
                <SunBTCNameBlock src={SunBTCMainLogo} />
                <Name>SunBTC</Name>
            </NameBlock>
            <NavContainer>
                <HeaderLink to="/">
                    <NavBlock>
                        <Icon src={HomeIcon} />
                        <NavItem>Home</NavItem>
                    </NavBlock>
                </HeaderLink>
                <HeaderLink to="/marcketplace">
                    <NavBlock>
                        <Icon src={MarcketplaceIcon} />
                        <NavItem>Marcketplace</NavItem>
                    </NavBlock>
                </HeaderLink>
            </NavContainer>
            <ConnectButton onClick={() => wallet.connect()}>
                <ConnectButtonText><TronIcon src={TronLogo} /> Connect</ConnectButtonText>
            </ConnectButton>
        </HeaderContainer>
    )
}



