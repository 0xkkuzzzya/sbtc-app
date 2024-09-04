import styled from "styled-components";
import SunBTCMainLogo from '../../assets/SunBTCMainLogo.webp';
import { HeaderLink } from "../CustomLinks/HeaderLinks";
import { TronLinkAdapter } from '@tronweb3/tronwallet-adapters';
import MarcketplaceIcon from '../../assets/MarcketplaceIcon.svg';
import HomeIcon from '../../assets/HomeIcon.png';
import TronLogo from '../../assets/TronLogo.png';
import { useEffect, useMemo, useState } from "react";
import { WalletReadyState } from "@tronweb3/tronwallet-abstract-adapter";

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

    const [readyState, setReadyState] = useState(WalletReadyState.NotFound);
    const [account, setAccount] = useState('');
    const [netwok, setNetwork] = useState({});
    const [signedMessage, setSignedMessage] = useState('');

    const adapter = useMemo(() => new TronLinkAdapter(), []);
    useEffect(() => {
      setReadyState(adapter.state as unknown as WalletReadyState);
      setAccount(adapter.address || '');
   
      adapter.on('connect', () => {
        setAccount(adapter.address || '');
      });
   
      adapter.on('readyStateChanged', (state: any) => {
        setReadyState(state);
      });
   
      adapter.on('accountsChanged', (data: any) => {
        setAccount(data);
      });
   
      adapter.on('chainChanged', (data: any) => {
        setNetwork(data);
      });
   
      adapter.on('disconnect', () => {
        // when disconnect from wallet
      });
      return () => {
        // remove all listeners when components is destroyed
        adapter.removeAllListeners();
      };
    }, []);

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
            <ConnectButton disabled={adapter.connected} onClick={() => adapter.connect()}>
                <ConnectButtonText><TronIcon src={TronLogo} /> Connect</ConnectButtonText>
            </ConnectButton>
        </HeaderContainer>
    )
}



